import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';

@Component({
	selector: 'app-github',
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.css'],
	providers: [GithubService]

})
export class GithubComponent implements OnInit {
	user: any;
	repos: any;
	userName: string;

	constructor(private githubService: GithubService) {
		this.githubService.getUser().subscribe(user => {
			console.log("user ", user);

			this.user = user;
		});

		this.githubService.getRepos().subscribe(repos => {
			console.log("repos ", repos);

			this.repos = repos;
		});

	}

	findProfile() {

		this.githubService.updateUser(this.userName);

		this.githubService.getUser().subscribe(user => {

			this.user = user;
		});

		this.githubService.getRepos().subscribe(repos => {

			this.repos = repos;
		});

	}


	ngOnInit() {
	}

}
