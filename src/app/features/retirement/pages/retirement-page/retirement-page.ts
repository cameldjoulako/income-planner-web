import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectionTable } from '../../components/projection-table/projection-table';
import { ProjectionPoint } from '../../models/projection.model';
import { MOCK_PROJECTION } from '../../models/mock-projection';

@Component({
  standalone: true,
  selector: 'app-retirement-page',
  imports: [CommonModule, ProjectionTable],
  templateUrl: './retirement-page.html',
  styleUrl: './retirement-page.scss',
})
export class RetirementPage {
  projection: ProjectionPoint[] = MOCK_PROJECTION;
}
