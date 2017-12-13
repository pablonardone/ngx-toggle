import {TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import {Component, TemplateRef, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

import {createGenericTestComponent} from './test/common';
import {NgxToggleModule} from './index';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function triggerKeyDown(element: DebugElement, keyCode: number, shiftKey = false) {
  let event = {
    which: keyCode,
    shiftKey: shiftKey,
    defaultPrevented: false,
    propagationStopped: false,
    stopPropagation: function() { this.propagationStopped = true; },
    preventDefault: function() { this.defaultPrevented = true; }
  };
  element.triggerEventHandler('keydown', event);
  return event;
}

describe('ngx-toggle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
        {declarations: [TestComponent], imports: [NgxToggleModule, FormsModule, ReactiveFormsModule]});
  });

  it('simple test', () => { expect(true).toBeTruthy('Do it!'); });
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
}