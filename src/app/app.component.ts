import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERlc2VydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Rain Forest',
      url: 'https://plus.unsplash.com/premium_photo-1674014497100-a2751be936aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFpbiUyMEZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At a Starry Night',
      url: 'https://images.unsplash.com/photo-1498745289750-175b844dce53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmtuZXNzfGVufDB8fDB8fHww'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At the Desert',
      url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERlc2VydHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Rain Forest',
      url: 'https://plus.unsplash.com/premium_photo-1674014497100-a2751be936aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFpbiUyMEZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At a Starry Night',
      url: 'https://images.unsplash.com/photo-1498745289750-175b844dce53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmtuZXNzfGVufDB8fDB8fHww'
    }
  ];

  checkWindowIndex(index: number)
  {
    return Math.abs(this.currentPage - index) < 5;
  }
}
