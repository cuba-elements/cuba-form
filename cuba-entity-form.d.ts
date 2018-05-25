/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cuba-entity-form.html
 */

/// <reference path="cuba-form-behavior.d.ts" />
/// <reference path="../cuba-app/cuba-app-aware-behavior.d.ts" />

/**
 * `cuba-entity-form`
 */
interface CubaEntityFormElement extends Polymer.Element, CubaAppAwareBehavior, CubaFormBehavior {

  /**
   * Entity name as specified in domain model class via `@Entity` annotation e.g. sec$User
   */
  entityName: string|null|undefined;
  entity: object|null|undefined;
  ready(): void;
  submit(): any;
}

interface HTMLElementTagNameMap {
  "cuba-entity-form": CubaEntityFormElement;
}
