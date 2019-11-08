/// <reference path="./class/colshape/colshape.d.ts" />
/// <reference path="./class/colshape/colshape-circle.d.ts" />
/// <reference path="./class/colshape/colshape-cuboid.d.ts" />
/// <reference path="./class/colshape/colshape-polygon.d.ts" />
/// <reference path="./class/colshape/colshape-rectangle.d.ts" />
/// <reference path="./class/colshape/colshape-sphere.d.ts" />
/// <reference path="./class/colshape/colshape-tube.d.ts" />

/// <reference path="./class/dx/dx-font.d.ts" />
/// <reference path="./class/dx/dx-material.d.ts" />
/// <reference path="./class/dx/dx-rendertarget.d.ts" />
/// <reference path="./class/dx/dx-screensource.d.ts" />
/// <reference path="./class/dx/dx-shader.d.ts" />
/// <reference path="./class/dx/dx-texture.d.ts" />

/// <reference path="./class/element/base-element.d.ts" />
/// <reference path="./class/element/element.d.ts" />

/// <reference path="./class/engine/engine-col.d.ts" />
/// <reference path="./class/engine/engine-dff.d.ts" />
/// <reference path="./class/engine/engine-ifp.d.ts" />
/// <reference path="./class/engine/engine-txd.d.ts" />
/// <reference path="./class/engine/engine.d.ts" />

/// <reference path="./class/gui/base-gui-element.d.ts" />
/// <reference path="./class/gui/gui-browser.d.ts" />
/// <reference path="./class/gui/gui-button.d.ts" />
/// <reference path="./class/gui/gui-checkbox.d.ts" />
/// <reference path="./class/gui/gui-combobox.d.ts" />
/// <reference path="./class/gui/gui-edit.d.ts" />
/// <reference path="./class/gui/gui-element.d.ts" />
/// <reference path="./class/gui/gui-font.d.ts" />
/// <reference path="./class/gui/gui-gridlist.d.ts" />
/// <reference path="./class/gui/gui-label.d.ts" />
/// <reference path="./class/gui/gui-memo.d.ts" />
/// <reference path="./class/gui/gui-progressbar.d.ts" />
/// <reference path="./class/gui/gui-radiobutton.d.ts" />
/// <reference path="./class/gui/gui-scrollbar.d.ts" />
/// <reference path="./class/gui/gui-scrollpane.d.ts" />
/// <reference path="./class/gui/gui-staticimage.d.ts" />
/// <reference path="./class/gui/gui-tab.d.ts" />
/// <reference path="./class/gui/gui-tabpanel.d.ts" />
/// <reference path="./class/gui/gui-window.d.ts" />

/// <reference path="./class/oop/matrix.d.ts" />
/// <reference path="./class/oop/vector2.d.ts" />
/// <reference path="./class/oop/vector3.d.ts" />
/// <reference path="./class/oop/vector4.d.ts" />

/// <reference path="./class/blip.d.ts" />
/// <reference path="./class/browser.d.ts" />
/// <reference path="./class/camera.d.ts" />
/// <reference path="./class/effect.d.ts" />
/// <reference path="./class/file.d.ts" />
/// <reference path="./class/light.d.ts" />
/// <reference path="./class/marker.d.ts" />
/// <reference path="./class/object.d.ts" />
/// <reference path="./class/ped.d.ts" />
/// <reference path="./class/pickup.d.ts" />
/// <reference path="./class/player.d.ts" />
/// <reference path="./class/projectile.d.ts" />
/// <reference path="./class/radararea.d.ts" />
/// <reference path="./class/request.d.ts" />
/// <reference path="./class/resource.d.ts" />
/// <reference path="./class/searchlight.d.ts" />
/// <reference path="./class/sound.d.ts" />
/// <reference path="./class/sound3d.d.ts" />
/// <reference path="./class/team.d.ts" />
/// <reference path="./class/timer.d.ts" />
/// <reference path="./class/vehicle.d.ts" />
/// <reference path="./class/water.d.ts" />
/// <reference path="./class/weapon.d.ts" />
/// <reference path="./class/xml.d.ts" />

/// <reference path="./function/audio.d.ts" />
/// <reference path="./function/blip.d.ts" />
/// <reference path="./function/browser.d.ts" />
/// <reference path="./function/camera.d.ts" />
/// <reference path="./function/clothes-and-body.d.ts" />
/// <reference path="./function/colshape.d.ts" />
/// <reference path="./function/cursor.d.ts" />
/// <reference path="./function/drawing.d.ts" />
/// <reference path="./function/effect.d.ts" />
/// <reference path="./function/element.d.ts" />
/// <reference path="./function/engine.d.ts" />
/// <reference path="./function/event.d.ts" />
/// <reference path="./function/explosion.d.ts" />
/// <reference path="./function/file.d.ts" />
/// <reference path="./function/fire.d.ts" />
/// <reference path="./function/gui.d.ts" />
/// <reference path="./function/input.d.ts" />
/// <reference path="./function/light.d.ts" />
/// <reference path="./function/marker.d.ts" />
/// <reference path="./function/object.d.ts" />
/// <reference path="./function/output.d.ts" />
/// <reference path="./function/ped.d.ts" />
/// <reference path="./function/pickup.d.ts" />
/// <reference path="./function/player.d.ts" />
/// <reference path="./function/projectile.d.ts" />
/// <reference path="./function/radar-area.d.ts" />
/// <reference path="./function/resource.d.ts" />
/// <reference path="./function/search-light.d.ts" />
/// <reference path="./function/team.d.ts" />
/// <reference path="./function/utility.d.ts" />
/// <reference path="./function/vehicle.d.ts" />
/// <reference path="./function/water.d.ts" />
/// <reference path="./function/weapon-creation.d.ts" />
/// <reference path="./function/weapon.d.ts" />
/// <reference path="./function/world.d.ts" />
/// <reference path="./function/xml.d.ts" />

// Global Lua namespace
declare const _G: any;

// Resource element of the resource the snippet was executed in
declare const resource: Resource;

// Resource root element of the resource the snippet was executed in
declare const resourceRoot: BaseElement;

// The root element of the server
declare const root: BaseElement;

// The root element of all GUI elements
declare const guiRoot: BaseElement;

// The player element of the local player.
declare const localPlayer: Player;

// The player or element the event was attached to
declare const source: BaseElement;

// The name of the event ("onResourceStart", "onPlayerWasted" etc.)
declare const eventName: string;

// The client that called the event
declare const client: Player;

// Current timer in callback function
declare const sourceTimer: Timer;
