import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Planet } from '../../models/planet.model';
import { log } from 'console';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  currentPage = 1;
  totalPages = 1;
  filteredPlanets: Planet[] = [];
  searchTerm: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchPlanets();
  }

  fetchPlanets(): void {
    this.apiService.getPlanets(this.currentPage).subscribe((data: any) => {
      this.planets = data.results;
      this.totalPages = Math.ceil(data.count / 5);
      console.log(this.totalPages);
      
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchPlanets();
  }
  filterPlanets() {
    this.filteredPlanets = this.planets.filter((planet: Planet) =>
      planet.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}

}