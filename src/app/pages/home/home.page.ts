import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import * as fromHomeActions from '../home/state/home.actions';
import * as fromHomeSelectors from '../home/state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  searchControl: FormControl;
  text: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);

    this.store.pipe(select(fromHomeSelectors.selectorHomeText))
      .subscribe(text => this.text = text);
  }

  doSearch(): void {
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeActions.changeText({text}));
  }

}
