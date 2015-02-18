"use strict";

/**
  Specifies interpolation targets for morphing {{#crossLink "Geometry"}}Geometry{{/crossLink}}s on
  associated {{#crossLink "GameObject"}}GameObjects{{/crossLink}}.

  <img src="http://www.gliffy.com/go/publish/image/7123401/L.png"></img>

  ### Example

 @class MorphTargets
  @module XEO
  @constructor
  @param [scene] {Scene} Parent {{#crossLink "Scene"}}Scene{{/crossLink}} - creates this MorphTarget in the default
  {{#crossLink "Scene"}}Scene{{/crossLink}} when omitted.
  @param [cfg] {*} Configs
  @param [cfg.id] {String} Optional ID, unique among all components in the parent scene, generated automatically when omitted.
  @param [cfg.meta] {String:Object} Optional map of user-defined metadata to attach to this MorphTarget.
  @param [cfg.targets=[]] {Array} The morph targets.
  @param [cfg.factor=0] {Number} The morph factor.
  @extends Component
 */
XEO.MorphTargets = XEO.Component.extend({

    className: "XEO.MorphTargets",

    type: "MorphTargets",

    _init: function (cfg) {

        this.scene.on("webglContextRestored",
            function () {

            });
    },


    /**
     * The morph targets.
     *
     *TODO
     *
     * @property targets
     * @default []
     * @type Array
     */
    set targets(value) {

        /**
         * Fired whenever this MorphTarget's  {{#crossLink "MorphTargets/targets:property"}}{{/crossLink}} property changes.
         * @event targets
         * @param value The property's new value
         */
    },

    get targets() {

    },

    /**
     * The morph factor
     *
     * @property factor
     * @default 0
     * @type Number
     */
    set factor(value) {

        /**
         * Fired whenever this MorphTarget's  {{#crossLink "MorphTargets/factor:property"}}{{/crossLink}} property changes.
         * @event factor
         * @param value The property's new value
         */
    },

    get factor() {
        return this._core.factor;
    },

    _compile: function () {
        this._renderer.MorphTargets = this._core;
    },

    /**
     * JSON representation of this component
     * @property json
     * @type GameObject
     */

    _getJSON: function () {
        return {
            targets: this.targets,
            factor: this.factor
        };
    }
});


