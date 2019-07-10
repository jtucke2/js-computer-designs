import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../global/services/inventory.service';
import { BasePlatformD } from '../../global/models/base-platform';
import { Category } from '../../global/models/categories.enum';

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  constructor(
    public inventoryService: InventoryService,
  ) { }

  ngOnInit() {
  }

  getTopCpu(p: BasePlatformD): string {
    const cpus = p.components[Category.CPU];
    if (!cpus) {
      return '';
    }
    const maxCpu = cpus.reduce((prev, curr) => prev.salePrice > curr.salePrice ? prev : curr);
    return `${maxCpu.manufacturer.name} ${maxCpu.model}`;
  }

  getTopGpu(p: BasePlatformD): string {
    const gpus = p.components[Category.GPU];
    if (!gpus) {
      return '';
    }
    const maxGpu = gpus.reduce((prev, curr) => prev.salePrice > curr.salePrice ? prev : curr);
    return `${maxGpu.manufacturer.name} ${maxGpu.model}`;
  }

  getTopRam(p: BasePlatformD): string {
    const rams = p.components[Category.RAM];
    if (!rams) {
      return '';
    }
    const maxRam = rams.reduce((prev, curr) => prev.salePrice > curr.salePrice ? prev : curr);
    const speed = maxRam.specificationFields.find(sf => sf.name === 'Speed').value;
    const size = maxRam.specificationFields.find(sf => sf.name === 'Size').value;
    return `${size} of ${speed} RAM`;
  }
}
