import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  user: any = {};
  achievements: any = {};
  userAchievements: any = {};
  achievementsEarned: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUser().subscribe(response => {
      this.user = response;
    });

    this.appService.getAchievements().subscribe(response => {
      this.achievements = response;
    });
  }
}
