import { Projection } from './../../services/projection';
import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { ProjectionTable } from '../../components/projection-table/projection-table';
import { ProjectionPoint } from '../../models/projection.model';
import { MOCK_PROJECTION } from '../../models/mock-projection';
import { Projection as ProjectionService } from '../../services/projection';

@Component({
  standalone: true,
  selector: 'app-retirement-page',
  imports: [CommonModule, ProjectionTable],
  templateUrl: './retirement-page.html',
  styleUrl: './retirement-page.scss',
})
export class RetirementPage {
  projection: Signal<ProjectionPoint[]>;

  constructor(private projectionService: ProjectionService) {
    this.projection = this.projectionService.getProjection();
  }
  /*   projection: ProjectionPoint[] = MOCK_PROJECTION;
   */

  selectedPoint?: ProjectionPoint;

  onRowSelected(point: ProjectionPoint) {
    this.selectedPoint = point;
  }
}
