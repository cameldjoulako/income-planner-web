import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionPoint } from '../../models/projection.model';

@Component({
  standalone: true,
  selector: 'app-projection-table',
  imports: [CommonModule],
  templateUrl: './projection-table.html',
  styleUrl: './projection-table.scss',
})
export class ProjectionTable {
  @Input({ required: true }) points: ProjectionPoint[] = [];
}
