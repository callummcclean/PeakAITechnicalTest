interface PackingItem {
  id: string;
  weight: number;
  deliveryDays: number;
}

class BoxPacker {
  items: PackingItem[];

  constructor(ids: string[], weights: number[], days: number[]) {
    this.items = [];

    if (ids.length === weights.length && ids.length === days.length) {
      this.createPackingItems(ids, weights, days);
    } else {
      throw new Error('Supplied arrays must be of equal length');
    }

  }

  private createPackingItems(ids: string[], weights: number[], days: number[]) {
    // map inputs to list of objects
    for (let i = 0; i < ids.length; i += 1) {
      this.items.push({
        id: ids[i],
        weight: weights[i],
        deliveryDays: days[i],
      });
    }
  }

  private createCombinations(items: PackingItem[]) {
    if (items.length === 1) {
      return [items];
    }

    const subarr = this.createCombinations(items.slice(1));
    return subarr.concat(subarr.map(e => e.concat(items[0])), [[items[0]]]);
  }

  private mapArrayToResponse(items: PackingItem[]) {
    const response = {
      ids: [],
      deliveryDays: 0,
    };

    items.map(item => {
      response.ids.push(item.id);
      response.deliveryDays += item.deliveryDays;
    });

    return response;
  }

  calculate(capcaity: number) {
    // create all possible item combinations
    const combinations = this.createCombinations(this.items);
    let lowestDays = Number.MAX_SAFE_INTEGER;
    let result = [];

    combinations.forEach(array => {
      let totalWeight = 0;
      let totalDays = 0;

      // for each combination calculate total weight and days
      array.forEach((item: PackingItem) => {
        totalWeight += item.weight;
        totalDays += item.deliveryDays;
      });

      // potential to be best solution
      if (totalWeight <= capcaity && totalDays <= lowestDays) {
        // check no other items could fit in the box
        const diff = this.items.filter(item => !array.includes(item));

        if (!diff.some(item => item.weight <= (capcaity - totalWeight))) {
          lowestDays = totalDays;
          result = array;
        }
      }
    });

    // map solution to response object
    return this.mapArrayToResponse(result);
  }
}

export default BoxPacker;
