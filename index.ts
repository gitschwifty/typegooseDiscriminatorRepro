import { modelOptions, prop, getModelForClass, buildSchema } from '@typegoose/typegoose';

enum BuildingTypes {
    Garage = 'Garage',
    SummerHouse = 'SummerHouse'
};

@modelOptions({
    schemaOptions: {
      discriminatorKey: 'type',
      strict: 'throw',
      _id: false
    }
  })
  class Building {
    @prop({ default: 100 })
    public width?: number;
  
    @prop({ required: true, enum: BuildingTypes })
    public type!: BuildingTypes;
  }
  
  class Garage extends Building {
    @prop({ default: 10 })
    public slotsForCars?: number;
  }
  
  class SummerHouse extends Building {
    @prop({ default: 100 })
    public distanceToLake?: number;
  }
  
  class Area {
    @prop({ type: Building, discriminators: () => [Garage, SummerHouse], required: true })
    public buildings!: Building[];
  }
  
  const AreaModel = getModelForClass(Area);
  console.log(buildSchema(Area));