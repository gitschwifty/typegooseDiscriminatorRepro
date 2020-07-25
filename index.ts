import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose';
@modelOptions({
    schemaOptions: {
      discriminatorKey: 'type'
    }
  })
  class Building {
    @prop({ default: 100 })
    public width?: number;
  
    @prop({ required: true })
    public type!: string;
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
    @prop({ type: Building, discriminators: () => [Garage, SummerHouse] })
    public buildings?: Building[];
  }
  
  const AreaModel = getModelForClass(Area);
  console.log(AreaModel);