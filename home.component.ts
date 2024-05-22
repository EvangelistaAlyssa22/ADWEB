import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
    <input type="text" placeholder="Filter by city" #filter>
    <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  baseUrl = 'https://raw.githubusercontent.com/angular/angular-cli/main/docs/images';

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit() {
    this.housingLocationList = [
      {
        id: 0,
        name: 'Acme Fresh Start Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        availableUnits: 4,
        wifi: true,
        laundry: true
      },
      {
        id: 1,
        name: 'A113 Transitional Housing',
        city: 'Santa Monica',
        state: 'CA',
        photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        availableUnits: 0,
        wifi: false,
        laundry: true
      },
      {
        id: 2,
        name: 'Warm Beds Housing Support',
        city: 'Juneau',
        state: 'AK',
        photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
        availableUnits: 1,
        wifi: false,
        laundry: false
      },
      {
        id: 3,
        name: 'Homesteady Housing',
        city: 'Chicago',
        state: 'IL',
        photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false
      },
      {
        id: 4,
        name: 'Happy Homes Group',
        city: 'Gary',
        state: 'IN',
        photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        availableUnits: 1,
        wifi: true,
        laundry: false
      },
      {
        id: 5,
        name: 'Hopeful Apartment Group',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
        availableUnits: 2,
        wifi: true,
        laundry: true
      },
      {
        id: 6,
        name: 'Seriously Safe Towns',
        city: 'Oakland',
        state: 'CA',
        photo: `${this.baseUrl}/paul-olyslager-uTmWdIQsCbE-unsplash.jpg`,
        availableUnits: 5,
        wifi: true,
        laundry: true
      },
      {
        id: 7,
        name: 'Gary Apartments',
        city: 'Gary',
        state: 'IN',
        photo: `${this.baseUrl}/daniel-tormek-eMhvRdUbEkQ-unsplash.jpg`,
        availableUnits: 3,
        wifi: true,
        laundry: true
      },
      {
        id: 8,
        name: 'New Start Group',
        city: 'Juneau',
        state: 'AK',
        photo: `${this.baseUrl}/glen-finn-pVHhBdCmhRc-unsplash.jpg`,
        availableUnits: 4,
        wifi: true,
        laundry: true
      },
      {
        id: 9,
        name: 'Juneau Transitional Housing',
        city: 'Juneau',
        state: 'AK',
        photo: `${this.baseUrl}/timmos-DwPuTlWdIQ0-unsplash.jpg`,
        availableUnits: 1,
        wifi: false,
        laundry: true
      }
    ];
  }
}
