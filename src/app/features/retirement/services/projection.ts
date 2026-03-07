import { Injectable, signal } from '@angular/core';
import { ProjectionPoint } from '../models/projection.model';
import { MOCK_PROJECTION } from '../models/mock-projection';

@Injectable({
  providedIn: 'root',
})
export class Projection {
  private projectionSignal = signal<ProjectionPoint[]>(MOCK_PROJECTION);

  getProjection() {
    return this.projectionSignal.asReadonly();
  }

  selectScenario(points: ProjectionPoint[]) {
    this.projectionSignal.set(points);
  }
}
