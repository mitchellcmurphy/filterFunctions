import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      HomeComponent
    ]
  }));

  beforeEach(inject([ HomeComponent ], (home: HomeComponent) => {
    home.ngOnInit();
  }));

  it('should have default data', inject([ HomeComponent ], (home: HomeComponent) => {
    expect(home.emails).toEqual([]);
    expect(home.filteredEmails).toEqual([]);
    expect(home.filteredEmailsMap).toEqual(new Map());  
  }));

  it('should generate random emails', inject([ HomeComponent ], (home: HomeComponent) => {
    home.randomPercentage = 50;
    home.emailNumber = 10;
    home.generateEmails();
    expect(home.emails).not.toBeNull();
    expect(home.emails.length).toEqual(10);
    expect(home.expectedCount).toEqual(10 * 0.5)
  }));

  it('should shuffle emails', inject([ HomeComponent ], (home: HomeComponent) => {
    let emails = ["1234@email.com","1234@email.com","5678@email.com","5678@email.com","9876@email.com"];
    home.emails = emails.slice();
    home.shuffleEmails();
    expect(home.emails).not.toEqual(emails);
  }));

  it('should filter emails into a map with proper size', inject([ HomeComponent ], (home: HomeComponent) => {
    home.randomPercentage = 50;
    home.emailNumber = 10;
    home.generateEmails();
    home.filterEmailsMap();
    expect(home.expectedCount).not.toBeNull();
    expect(home.filteredEmailsMap.size).toEqual(home.expectedCount);
  }));

  it('should filter emails into a map with proper size in under a second with 100,000 entries', inject([ HomeComponent ], (home: HomeComponent) => {
    home.randomPercentage = 50;
    home.emailNumber = 100000;
    home.generateEmails();
    home.filterEmailsMap();
    expect(home.expectedCount).not.toBeNull();
    expect(home.filteredEmailsMap.size).toEqual(home.expectedCount);
    expect(home.ticksMap).toBeLessThan(1000);
  }));

  it('should clear out all of the data when clearAll() called', inject([ HomeComponent ], (home: HomeComponent) => {
    home.randomPercentage = 50;
    home.emailNumber = 10;
    home.generateEmails();
    home.filterEmailsMap();
    home.clearAll();
    expect(home.emails).toEqual([]);
    expect(home.filteredEmails).toEqual([]);
    expect(home.filteredEmailsMap).toEqual(new Map());
  }));


});
