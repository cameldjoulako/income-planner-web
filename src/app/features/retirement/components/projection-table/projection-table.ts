import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectionPoint } from '../../models/projection.model';
import { CompactNumberPipe } from '../../../../shared/pipes/compact-number-pipe';

@Component({
  standalone: true,
  selector: 'app-projection-table',
  imports: [CommonModule, CompactNumberPipe],
  templateUrl: './projection-table.html',
  styleUrl: './projection-table.scss',
})
export class ProjectionTable {
  @Input({ required: true }) points: ProjectionPoint[] = [];
}
