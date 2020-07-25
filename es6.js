"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
var BuildingTypes;
(function (BuildingTypes) {
    BuildingTypes["Garage"] = "Garage";
    BuildingTypes["SummerHouse"] = "SummerHouse";
})(BuildingTypes || (BuildingTypes = {}));
;
let Building = class Building {
};
__decorate([
    typegoose_1.prop({ default: 100 }),
    __metadata("design:type", Number)
], Building.prototype, "width", void 0);
__decorate([
    typegoose_1.prop({ required: true, enum: BuildingTypes }),
    __metadata("design:type", String)
], Building.prototype, "type", void 0);
Building = __decorate([
    typegoose_1.modelOptions({
        schemaOptions: {
            discriminatorKey: 'type',
            strict: 'throw',
            _id: false
        }
    })
], Building);
class Garage extends Building {
}
__decorate([
    typegoose_1.prop({ default: 10 }),
    __metadata("design:type", Number)
], Garage.prototype, "slotsForCars", void 0);
class SummerHouse extends Building {
}
__decorate([
    typegoose_1.prop({ default: 100 }),
    __metadata("design:type", Number)
], SummerHouse.prototype, "distanceToLake", void 0);
class Area {
}
__decorate([
    typegoose_1.prop({ type: Building, discriminators: () => [Garage, SummerHouse], required: true }),
    __metadata("design:type", Array)
], Area.prototype, "buildings", void 0);
const AreaModel = typegoose_1.getModelForClass(Area);
