import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
  providers: [GithubService]
})
export class AllUserComponent implements OnInit {
  tableData;
  repoData;
  user;
  constructor(private githubService: GithubService) {

  }
  @ViewChild("detailsModal", { read: false, static: false }) detailsModal: ModalDirective;
  ngOnInit() {
    this.githubService.getAllUsers().subscribe(user => {
      console.log("user ", user);

      this.tableData = user;
    });
  }
  details(userName: string) {
    console.log("userName ", userName);
    this.user = userName;
    this.detailsModal.show();
    this.githubService.getUserRepo(userName).subscribe(result => {
      console.log("result ", result);
      this.repoData = result;
    })

  }
  cancel() {
    this.detailsModal.hide();
  }
}
