import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Create mock instances of ElementRef and Renderer2
    el = {} as ElementRef;
    renderer = {} as Renderer2;

    // Create the directive with the mocked dependencies
    directive = new HighlightDirective(el, renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});

