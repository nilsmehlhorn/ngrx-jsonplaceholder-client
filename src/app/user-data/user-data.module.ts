import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './store/users.effects';
import { UsersFeature } from './store/users.feature';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(UsersFeature.name, UsersFeature.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UserDataModule {}
