import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectorHomeState = createFeatureSelector('home');

export const selectorHomeText = createSelector(
    selectorHomeState,
    (homeState: HomeState) => homeState.text
);