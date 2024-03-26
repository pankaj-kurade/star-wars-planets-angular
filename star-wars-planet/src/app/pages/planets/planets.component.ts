import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPlanets();
  }

  fetchPlanets(): void {
    this.apiService.getPlanets(this.currentPage).subscribe((data: any) => {
      this.planets = data.results;
      this.totalPages = Math.ceil(data.count / 10); // Assuming 10 results per page
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchPlanets();
  }
}
