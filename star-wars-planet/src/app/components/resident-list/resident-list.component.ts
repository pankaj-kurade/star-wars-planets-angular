import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Resident } from '../../models/resident.model';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.scss']
})
export class ResidentListComponent implements OnInit {
  @Input() residentsUrls: string[] = [];
  residents: Resident[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchResidents();
  }

  fetchResidents(): void {
    this.residentsUrls.forEach(url => {
      this.apiService.getResident(url).subscribe((data: Resident) => {
        this.residents.push(data);
      });
    });
  }
}
