(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t){e.exports=function(O){O.MOUSE;function A(e){this.object=e,this.target=new O.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25;var n,o,a,i,r,s,l,c,h,d=this,u=1e-6,m=0,g=0,p=1,f=new O.Vector3,b=!1;this.getPolarAngle=function(){return o},this.getAzimuthalAngle=function(){return n},this.rotateLeft=function(e){g-=e},this.rotateUp=function(e){m-=e},this.panLeft=(a=new O.Vector3,function(e){var t=this.object.matrix.elements;a.set(t[0],t[1],t[2]),a.multiplyScalar(-e),f.add(a)}),this.panUp=(i=new O.Vector3,function(e){var t=this.object.matrix.elements;i.set(t[4],t[5],t[6]),i.multiplyScalar(e),f.add(i)}),this.pan=function(e,t,n,o){if(d.object instanceof O.PerspectiveCamera){var a=d.object.position.clone().sub(d.target).length();a*=Math.tan(d.object.fov/2*Math.PI/180),d.panLeft(2*e*a/o),d.panUp(2*t*a/o)}else d.object instanceof O.OrthographicCamera?(d.panLeft(e*(d.object.right-d.object.left)/n),d.panUp(t*(d.object.top-d.object.bottom)/o)):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")},this.dollyIn=function(e){d.object instanceof O.PerspectiveCamera?p/=e:d.object instanceof O.OrthographicCamera?(d.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*e)),d.object.updateProjectionMatrix(),b=!0):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")},this.dollyOut=function(e){d.object instanceof O.PerspectiveCamera?p*=e:d.object instanceof O.OrthographicCamera?(d.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/e)),d.object.updateProjectionMatrix(),b=!0):console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")},this.update=(r=new O.Vector3,s=(new O.Quaternion).setFromUnitVectors(e.up,new O.Vector3(0,1,0)),l=s.clone().inverse(),c=new O.Vector3,h=new O.Quaternion,function(){var e=this.object.position;r.copy(e).sub(this.target),r.applyQuaternion(s),n=Math.atan2(r.x,r.z),o=Math.atan2(Math.sqrt(r.x*r.x+r.z*r.z),r.y),n+=g,o+=m,n=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,n)),o=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,o)),o=Math.max(u,Math.min(Math.PI-u,o));var t=r.length()*p;return t=Math.max(this.minDistance,Math.min(this.maxDistance,t)),this.target.add(f),r.x=t*Math.sin(o)*Math.sin(n),r.y=t*Math.cos(o),r.z=t*Math.sin(o)*Math.cos(n),r.applyQuaternion(l),e.copy(this.target).add(r),this.object.lookAt(this.target),!0===this.enableDamping?(g*=1-this.dampingFactor,m*=1-this.dampingFactor):m=g=0,p=1,f.set(0,0,0),!(!(b||c.distanceToSquared(this.object.position)>u||8*(1-h.dot(this.object.quaternion))>u)||(c.copy(this.object.position),h.copy(this.object.quaternion),b=!1))})}function e(e,t){var i=new A(e);this.domElement=void 0!==t?t:document,Object.defineProperty(this,"constraint",{get:function(){return i}}),this.getPolarAngle=function(){return i.getPolarAngle()},this.getAzimuthalAngle=function(){return i.getAzimuthalAngle()},this.enabled=!0,this.center=this.target,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:O.MOUSE.LEFT,ZOOM:O.MOUSE.MIDDLE,PAN:O.MOUSE.RIGHT};var r=this,s=new O.Vector2,l=new O.Vector2,c=new O.Vector2,h=new O.Vector2,d=new O.Vector2,u=new O.Vector2,m=new O.Vector2,g=new O.Vector2,p=new O.Vector2,f={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},b=f.NONE;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom;var n={type:"change"},a={type:"start"},o={type:"end"};function v(e,t){var n=r.domElement===document?r.domElement.body:r.domElement;i.pan(e,t,n.clientWidth,n.clientHeight)}function w(){return Math.pow(.95,r.zoomSpeed)}function y(e){if(!1!==r.enabled){if(e.preventDefault(),e.button===r.mouseButtons.ORBIT){if(!1===r.enableRotate)return;b=f.ROTATE,s.set(e.clientX,e.clientY)}else if(e.button===r.mouseButtons.ZOOM){if(!1===r.enableZoom)return;b=f.DOLLY,m.set(e.clientX,e.clientY)}else if(e.button===r.mouseButtons.PAN){if(!1===r.enablePan)return;b=f.PAN,h.set(e.clientX,e.clientY)}b!==f.NONE&&(document.addEventListener("mousemove",L,!1),document.addEventListener("mouseup",C,!1),r.dispatchEvent(a))}}function L(e){if(!1!==r.enabled){e.preventDefault();var t=r.domElement===document?r.domElement.body:r.domElement;if(b===f.ROTATE){if(!1===r.enableRotate)return;l.set(e.clientX,e.clientY),c.subVectors(l,s),i.rotateLeft(2*Math.PI*c.x/t.clientWidth*r.rotateSpeed),i.rotateUp(2*Math.PI*c.y/t.clientHeight*r.rotateSpeed),s.copy(l)}else if(b===f.DOLLY){if(!1===r.enableZoom)return;g.set(e.clientX,e.clientY),p.subVectors(g,m),0<p.y?i.dollyIn(w()):p.y<0&&i.dollyOut(w()),m.copy(g)}else if(b===f.PAN){if(!1===r.enablePan)return;d.set(e.clientX,e.clientY),u.subVectors(d,h),v(u.x,u.y),h.copy(d)}b!==f.NONE&&r.update()}}function C(){!1!==r.enabled&&(document.removeEventListener("mousemove",L,!1),document.removeEventListener("mouseup",C,!1),r.dispatchEvent(o),b=f.NONE)}function E(e){if(!1!==r.enabled&&!1!==r.enableZoom&&b===f.NONE){e.preventDefault(),e.stopPropagation();var t=0;void 0!==e.wheelDelta?t=e.wheelDelta:void 0!==e.detail&&(t=-e.detail),0<t?i.dollyOut(w()):t<0&&i.dollyIn(w()),r.update(),r.dispatchEvent(a),r.dispatchEvent(o)}}function R(e){if(!1!==r.enabled&&!1!==r.enableKeys&&!1!==r.enablePan)switch(e.keyCode){case r.keys.UP:v(0,r.keyPanSpeed),r.update();break;case r.keys.BOTTOM:v(0,-r.keyPanSpeed),r.update();break;case r.keys.LEFT:v(r.keyPanSpeed,0),r.update();break;case r.keys.RIGHT:v(-r.keyPanSpeed,0),r.update()}}function x(e){if(!1!==r.enabled){switch(e.touches.length){case 1:if(!1===r.enableRotate)return;b=f.TOUCH_ROTATE,s.set(e.touches[0].pageX,e.touches[0].pageY);break;case 2:if(!1===r.enableZoom)return;b=f.TOUCH_DOLLY;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);m.set(0,o);break;case 3:if(!1===r.enablePan)return;b=f.TOUCH_PAN,h.set(e.touches[0].pageX,e.touches[0].pageY);break;default:b=f.NONE}b!==f.NONE&&r.dispatchEvent(a)}}function P(e){if(!1!==r.enabled){e.preventDefault(),e.stopPropagation();var t=r.domElement===document?r.domElement.body:r.domElement;switch(e.touches.length){case 1:if(!1===r.enableRotate)return;if(b!==f.TOUCH_ROTATE)return;l.set(e.touches[0].pageX,e.touches[0].pageY),c.subVectors(l,s),i.rotateLeft(2*Math.PI*c.x/t.clientWidth*r.rotateSpeed),i.rotateUp(2*Math.PI*c.y/t.clientHeight*r.rotateSpeed),s.copy(l),r.update();break;case 2:if(!1===r.enableZoom)return;if(b!==f.TOUCH_DOLLY)return;var n=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(n*n+o*o);g.set(0,a),p.subVectors(g,m),0<p.y?i.dollyOut(w()):p.y<0&&i.dollyIn(w()),m.copy(g),r.update();break;case 3:if(!1===r.enablePan)return;if(b!==f.TOUCH_PAN)return;d.set(e.touches[0].pageX,e.touches[0].pageY),u.subVectors(d,h),v(u.x,u.y),h.copy(d),r.update();break;default:b=f.NONE}}}function k(){!1!==r.enabled&&(r.dispatchEvent(o),b=f.NONE)}function M(e){e.preventDefault()}this.update=function(){this.autoRotate&&b===f.NONE&&i.rotateLeft(2*Math.PI/60/60*r.autoRotateSpeed),!0===i.update()&&this.dispatchEvent(n)},this.reset=function(){b=f.NONE,this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(n),this.update()},this.dispose=function(){this.domElement.removeEventListener("contextmenu",M,!1),this.domElement.removeEventListener("mousedown",y,!1),this.domElement.removeEventListener("mousewheel",E,!1),this.domElement.removeEventListener("MozMousePixelScroll",E,!1),this.domElement.removeEventListener("touchstart",x,!1),this.domElement.removeEventListener("touchend",k,!1),this.domElement.removeEventListener("touchmove",P,!1),document.removeEventListener("mousemove",L,!1),document.removeEventListener("mouseup",C,!1),window.removeEventListener("keydown",R,!1)},this.domElement.addEventListener("contextmenu",M,!1),this.domElement.addEventListener("mousedown",y,!1),this.domElement.addEventListener("mousewheel",E,!1),this.domElement.addEventListener("MozMousePixelScroll",E,!1),this.domElement.addEventListener("touchstart",x,!1),this.domElement.addEventListener("touchend",k,!1),this.domElement.addEventListener("touchmove",P,!1),window.addEventListener("keydown",R,!1),this.update()}return(e.prototype=Object.create(O.EventDispatcher.prototype)).constructor=e,Object.defineProperties(e.prototype,{object:{get:function(){return this.constraint.object}},target:{get:function(){return this.constraint.target},set:function(e){console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."),this.constraint.target.copy(e)}},minDistance:{get:function(){return this.constraint.minDistance},set:function(e){this.constraint.minDistance=e}},maxDistance:{get:function(){return this.constraint.maxDistance},set:function(e){this.constraint.maxDistance=e}},minZoom:{get:function(){return this.constraint.minZoom},set:function(e){this.constraint.minZoom=e}},maxZoom:{get:function(){return this.constraint.maxZoom},set:function(e){this.constraint.maxZoom=e}},minPolarAngle:{get:function(){return this.constraint.minPolarAngle},set:function(e){this.constraint.minPolarAngle=e}},maxPolarAngle:{get:function(){return this.constraint.maxPolarAngle},set:function(e){this.constraint.maxPolarAngle=e}},minAzimuthAngle:{get:function(){return this.constraint.minAzimuthAngle},set:function(e){this.constraint.minAzimuthAngle=e}},maxAzimuthAngle:{get:function(){return this.constraint.maxAzimuthAngle},set:function(e){this.constraint.maxAzimuthAngle=e}},enableDamping:{get:function(){return this.constraint.enableDamping},set:function(e){this.constraint.enableDamping=e}},dampingFactor:{get:function(){return this.constraint.dampingFactor},set:function(e){this.constraint.dampingFactor=e}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.constraint.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.constraint.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.constraint.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.constraint.dampingFactor=e}}}),e}},function(e,t,n){e.exports=n(8)},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),z={isDev:!1,isShowingStats:!0,isLoaded:!1,isTweening:!1,isRotating:!0,isMouseMoving:!1,isMouseOver:!1,maxAnisotropy:1,dpr:1,easing:a.a.Easing.Quadratic.InOut,duration:500,model:{path:"./assets/models/Teapot.json",scale:20},texture:{path:"./assets/textures/",imageFiles:[{name:"UV",image:"UV_Grid_Sm.jpg"}]},mesh:{enableHelper:!1,wireframe:!1,translucent:!1,material:{color:16777215,emissive:16777215}},fog:{color:16777215,near:8e-4},camera:{fov:40,near:2,far:1e3,aspect:1,posX:0,posY:30,posZ:40},controls:{autoRotate:!0,autoRotateSpeed:-.5,rotateSpeed:.5,zoomSpeed:.8,minDistance:200,maxDistance:600,minPolarAngle:Math.PI/5,maxPolarAngle:Math.PI/2,minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,enableDamping:!0,dampingFactor:.5,enableZoom:!0,target:{x:0,y:0,z:0}},ambientLight:{enabled:!0,color:1315860},directionalLight:{enabled:!0,color:15790320,intensity:.4,x:-75,y:280,z:150},shadow:{enabled:!0,helperEnabled:!0,bias:0,mapWidth:2048,mapHeight:2048,near:250,far:400,top:100,right:100,bottom:-100,left:-100},pointLight:{enabled:!0,color:16777215,intensity:.34,distance:115,x:0,y:0,z:0},hemiLight:{enabled:!0,color:13158600,groundColor:16777215,intensity:.55,x:0,y:0,z:0}},i={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,n,o;t=void 0!==(e=e||{}).parent?e.parent:document.body,n=void 0!==e.id?e.id:"oldie",(o=this.getWebGLErrorMessage()).id=n,t.appendChild(o)}},r=n(0);function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function o(e,t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.scene=e,this.container=t,this.threeRenderer=new r.WebGLRenderer({antialias:!0}),this.threeRenderer.setClearColor(e.fog.color),this.threeRenderer.setPixelRatio(window.devicePixelRatio),t.appendChild(this.threeRenderer.domElement),this.threeRenderer.shadowMap.enabled=!0,this.threeRenderer.shadowMap.type=r.PCFSoftShadowMap,z.maxAnisotropy=this.threeRenderer.getMaxAnisotropy(),this.updateSize(),document.addEventListener("DOMContentLoaded",function(){return n.updateSize()},!1),window.addEventListener("resize",function(){return n.updateSize()},!1)}var e,t,n;return e=o,(t=[{key:"updateSize",value:function(){this.threeRenderer.setSize(this.container.offsetWidth,this.container.offsetHeight)}},{key:"render",value:function(e,t){this.threeRenderer.render(e,t)}}])&&s(e.prototype,t),n&&s(e,n),o}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function a(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=e.domElement.width,o=e.domElement.height;this.threeCamera=new r.PerspectiveCamera(z.camera.fov,n/o,z.camera.near,z.camera.far),this.threeCamera.position.set(z.camera.posX,z.camera.posY,z.camera.posZ),this.updateSize(e),window.addEventListener("resize",function(){return t.updateSize(e)},!1)}var e,t,n;return e=a,(t=[{key:"updateSize",value:function(e){this.threeCamera.aspect=e.domElement.width/e.domElement.height,this.threeCamera.updateProjectionMatrix()}}])&&c(e.prototype,t),n&&c(e,n),a}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=e,this.init()}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.ambientLight=new r.AmbientLight(z.ambientLight.color),this.ambientLight.visible=z.ambientLight.enabled,this.pointLight=new r.PointLight(z.pointLight.color,z.pointLight.intensity,z.pointLight.distance),this.pointLight.position.set(z.pointLight.x,z.pointLight.y,z.pointLight.z),this.pointLight.visible=z.pointLight.enabled,this.directionalLight=new r.DirectionalLight(z.directionalLight.color,z.directionalLight.intensity),this.directionalLight.position.set(z.directionalLight.x,z.directionalLight.y,z.directionalLight.z),this.directionalLight.visible=z.directionalLight.enabled,this.directionalLight.castShadow=z.shadow.enabled,this.directionalLight.shadow.bias=z.shadow.bias,this.directionalLight.shadow.camera.near=z.shadow.near,this.directionalLight.shadow.camera.far=z.shadow.far,this.directionalLight.shadow.camera.left=z.shadow.left,this.directionalLight.shadow.camera.right=z.shadow.right,this.directionalLight.shadow.camera.top=z.shadow.top,this.directionalLight.shadow.camera.bottom=z.shadow.bottom,this.directionalLight.shadow.mapSize.width=z.shadow.mapWidth,this.directionalLight.shadow.mapSize.height=z.shadow.mapHeight,this.directionalLightHelper=new r.CameraHelper(this.directionalLight.shadow.camera),this.directionalLightHelper.visible=z.shadow.helperEnabled,this.hemiLight=new r.HemisphereLight(z.hemiLight.color,z.hemiLight.groundColor,z.hemiLight.intensity),this.hemiLight.position.set(z.hemiLight.x,z.hemiLight.y,z.hemiLight.z),this.hemiLight.visible=z.hemiLight.enabled}},{key:"place",value:function(e){switch(e){case"ambient":this.scene.add(this.ambientLight);break;case"directional":this.scene.add(this.directionalLight),this.scene.add(this.directionalLightHelper);break;case"point":this.scene.add(this.pointLight);break;case"hemi":this.scene.add(this.hemiLight)}}}])&&d(e.prototype,n),o&&d(e,o),t}(),m=n(4),g=n.n(m);function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n=new g.a(r);this.threeControls=new n(e,t),this.init()}var e,t,n;return e=o,(t=[{key:"init",value:function(){this.threeControls.target.set(z.controls.target.x,z.controls.target.y,z.controls.target.z),this.threeControls.autoRotate=z.controls.autoRotate,this.threeControls.autoRotateSpeed=z.controls.autoRotateSpeed,this.threeControls.rotateSpeed=z.controls.rotateSpeed,this.threeControls.zoomSpeed=z.controls.zoomSpeed,this.threeControls.minDistance=z.controls.minDistance,this.threeControls.maxDistance=z.controls.maxDistance,this.threeControls.minPolarAngle=z.controls.minPolarAngle,this.threeControls.maxPolarAngle=z.controls.maxPolarAngle,this.threeControls.enableDamping=z.controls.enableDamping,this.threeControls.enableZoom=z.controls.enableZoom,this.threeControls.dampingFactor=z.controls.dampingFactor}}])&&p(e.prototype,t),n&&p(e,n),o}();function b(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),this.basic=new r.MeshBasicMaterial({color:e,side:r.DoubleSide}),this.standard=new r.MeshStandardMaterial({color:e,shading:r.FlatShading,roughness:1,metalness:0,side:r.DoubleSide}),this.wire=new r.MeshBasicMaterial({wireframe:!0})}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y,L,C,E,R=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=e,this.geo=null}var e,n,o;return e=t,(n=[{key:"make",value:function(e){var a=this;return"plane"===e?function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1;a.geo=new r.PlaneGeometry(e,t,n,o)}:"sphere"===e?function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:32,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:32;a.geo=new r.SphereGeometry(e,t,n)}:void 0}},{key:"place",value:function(e,t){var n,o,a=new b(15658734).standard,i=new r.Mesh(this.geo,a);(n=i.position).set.apply(n,v(e)),(o=i.rotation).set.apply(o,v(t)),z.shadow.enabled&&(i.receiveShadow=!0),this.scene.add(i)}}])&&w(e.prototype,n),o&&w(e,o),t}();function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var P=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderer=e}var e,n,o;return e=t,o=[{key:"start",value:function(){y("frame").start(),C.start(),y("rAF").tick(),y("FPS").frame(),y("render").start()}},{key:"end",value:function(){y("render").end(),y("frame").end(),y("rStats").start(),y().update(),y("rStats").end()}}],(n=[{key:"setUp",value:function(){L=new BrowserStats,C=new glStats,E=new threeStats(this.renderer.threeRenderer),y=new rStats({CSSPath:"./css/",userTimingAPI:!0,values:{frame:{caption:"Total frame time (ms)",over:16,average:!0,avgMs:100},fps:{caption:"Framerate (FPS)",below:30},calls:{caption:"Calls (three.js)",over:3e3},raf:{caption:"Time since last rAF (ms)",average:!0,avgMs:100},rstats:{caption:"rStats update (ms)",average:!0,avgMs:100},texture:{caption:"GenTex",average:!0,avgMs:100}},groups:[{caption:"Framerate",values:["fps","raf"]},{caption:"Frame Budget",values:["frame","texture","setup","render"]}],fractions:[{base:"frame",steps:["texture","setup","render"]}],plugins:[L,E,C]})}}])&&x(e.prototype,n),o&&x(e,o),t}(),k=n(2);function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"throttle",value:function(o,a,i){var r,s;return a=a||250,function(){var e=i||this,t=+new Date,n=arguments;r&&t<r+a?(clearTimeout(s),s=setTimeout(function(){r=t,o.apply(e,n)},a)):(r=t,o.apply(e,n))}}},{key:"logProgress",value:function(){return function(e){if(e.lengthComputable){var t=e.loaded/e.total*100;console.log(Math.round(t,2)+"% downloaded")}}}},{key:"logError",value:function(){return function(e){console.error(e)}}},{key:"handleColorChange",value:function(t){return function(e){"string"==typeof e&&(e=e.replace("#","0x")),t.setHex(e)}}},{key:"update",value:function(e){this.needsUpdate(e.material,e.geometry)}},{key:"needsUpdate",value:function(e,t){return function(){e.shading=+e.shading,e.vertexColors=+e.vertexColors,e.side=+e.side,e.needsUpdate=!0,t.verticesNeedUpdate=!0,t.normalsNeedUpdate=!0,t.colorsNeedUpdate=!0}}},{key:"updateTexture",value:function(t,n,o){return function(e){t[n]=o[e],t.needsUpdate=!0}}}],(n=null)&&M(t.prototype,n),o&&M(t,o),e}();function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.textures={}}var t,n,o;return t=e,(n=[{key:"load",value:function(){var n=this,e=new r.TextureLoader,a=z.maxAnisotropy,t=z.texture.imageFiles,i=[];return e.setPath(z.texture.path),t.forEach(function(o){i.push(new k.Promise(function(n,t){e.load(o.image,function(e){e.anisotropy=a;var t={};t[o.name]=e,t[o.name]instanceof r.Texture&&n(t)},O.logProgress(),function(e){return t(new Error(e+"An error occurred loading while loading "+o.image))})}))}),k.Promise.all(i).then(function(e){for(var t=0;t<e.length;t++)n.textures[Object.keys(e[t])[0]]=e[t][Object.keys(e[t])[0]]},function(e){return console.log(e)})}}])&&A(t.prototype,n),o&&A(t,o),e}();function T(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,T);var n=new r.WireframeGeometry(t.geometry),o=new r.LineSegments(n);o.material.depthTest=!1,o.material.opacity=.25,o.material.transparent=!0,t.add(o);var a=new r.EdgesGeometry(t.geometry),i=new r.LineSegments(a);i.material.depthTest=!1,i.material.opacity=.25,i.material.transparent=!0,t.add(i),e.add(new r.BoxHelper(t)),e.add(new r.FaceNormalsHelper(t,2)),e.add(new r.VertexNormalsHelper(t,2))}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function o(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.scene=e,this.textures=n,this.loader=new r.ObjectLoader(t),this.obj=null}var e,t,n;return e=o,(t=[{key:"load",value:function(){var n=this;this.loader.load(z.model.path,function(e){e.traverse(function(e){if(e instanceof r.Mesh){var t=new b(16777215).standard;t.map=n.textures.UV,e.material=t,z.shadow.enabled&&(e.receiveShadow=!0,e.castShadow=!0)}}),z.isDev&&z.mesh.enableHelper&&new T(n.scene,e),(n.obj=e).scale.multiplyScalar(z.model.scale),n.scene.add(e)},O.logProgress(),O.logError())}}])&&F(e.prototype,t),n&&F(e,n),o}();function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var H={left:37,up:38,right:39,down:40,space:32,tab:9,escape:27},U=function(){function n(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.domElement=e||document,this.keyCodes={},this.domElement.addEventListener("keydown",function(e){return t.onKeyChange(e)},!1),this.domElement.addEventListener("keyup",function(e){return t.onKeyChange(e)},!1),window.addEventListener("blur",function(){return t.onBlur},!1)}var e,t,o;return e=n,(t=[{key:"destroy",value:function(){var t=this;this.domElement.removeEventListener("keydown",function(e){return t.onKeyChange(e)},!1),this.domElement.removeEventListener("keyup",function(e){return t.onKeyChange(e)},!1),window.removeEventListener("blur",function(){return t.onBlur},!1)}},{key:"onBlur",value:function(){for(var e in this.keyCodes)this.keyCodes[e]=!1}},{key:"onKeyChange",value:function(e){var t=e.keyCode;this.keyCodes[t]="keydown"===e.type}},{key:"pressed",value:function(e){for(var t=e.split("+"),n=0;n<t.length;n++){var o=t[n],a=!1;if(a=-1!=Object.keys(H).indexOf(o)?this.keyCodes[H[o]]:this.keyCodes[o.toUpperCase().charCodeAt(0)],!a)return!1}return!0}},{key:"eventMatches",value:function(e,t){for(var n=H,o=Object.keys(n),a=t.split("+"),i=0;i<a.length;i++){var r=a[i],s=!1;if("shift"===r?s=!!e.shiftKey:"ctrl"===r?s=!!e.ctrlKey:"alt"===r?s=!!e.altKey:"meta"===r?s=!!e.metaKey:-1!==o.indexOf(r)?s=e.keyCode===n[r]:e.keyCode===r.toUpperCase().charCodeAt(0)&&(s=!0),!s)return!1}return!0}}])&&D(e.prototype,t),o&&D(e,o),n}();function N(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Z=function(){function i(e,t,n,o){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.renderer=e,this.scene=t,this.camera=n,this.controls=o,this.timeout=null,this.keyboard=new U,this.renderer.domElement.addEventListener("mousemove",function(e){return O.throttle(a.onMouseMove(e),250)},!1),this.renderer.domElement.addEventListener("mouseleave",function(e){return a.onMouseLeave(e)},!1),this.renderer.domElement.addEventListener("mouseover",function(e){return a.onMouseOver(e)},!1),this.keyboard.domElement.addEventListener("keydown",function(e){e.repeat||a.keyboard.eventMatches(e,"escape")&&console.log("Escape pressed")})}var e,t,n;return e=i,(t=[{key:"onMouseOver",value:function(e){e.preventDefault(),z.isMouseOver=!0}},{key:"onMouseLeave",value:function(e){e.preventDefault(),z.isMouseOver=!1}},{key:"onMouseMove",value:function(e){e.preventDefault(),clearTimeout(this.timeout),this.timeout=setTimeout(function(){z.isMouseMoving=!1},200),z.isMouseMoving=!0}}])&&N(e.prototype,t),n&&N(e,n),i}();function I(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,I);var e=new dat.GUI;this.camera=t.camera.threeCamera,this.controls=t.controls.threeControls,this.light=t.light;var a=e.addFolder("Camera"),i=a.add(z.camera,"fov",0,180).name("Camera FOV");i.onChange(function(e){o.controls.enableRotate=!1,o.camera.fov=e}),i.onFinishChange(function(){o.camera.updateProjectionMatrix(),o.controls.enableRotate=!0});var r=a.add(z.camera,"aspect",0,4).name("Camera Aspect");r.onChange(function(e){o.controls.enableRotate=!1,o.camera.aspect=e}),r.onFinishChange(function(){o.camera.updateProjectionMatrix(),o.controls.enableRotate=!0}),a.addColor(z.fog,"color").name("Fog Color").onChange(function(e){t.scene.fog.color.setHex(e)});var s=a.add(z.fog,"near",0,.01).name("Fog Near");s.onChange(function(e){o.controls.enableRotate=!1,t.scene.fog.density=e}),s.onFinishChange(function(){o.controls.enableRotate=!0});var l=e.addFolder("Controls");l.add(z.controls,"autoRotate").name("Auto Rotate").onChange(function(e){o.controls.autoRotate=e});var c=l.add(z.controls,"autoRotateSpeed",-1,1).name("Rotation Speed");c.onChange(function(e){o.controls.enableRotate=!1,o.controls.autoRotateSpeed=e}),c.onFinishChange(function(){o.controls.enableRotate=!0});var h=e.addFolder("Mesh");h.add(z.mesh,"translucent",!0).name("Translucent").onChange(function(e){e?(n.material.transparent=!0,n.material.opacity=.5):n.material.opacity=1}),h.add(z.mesh,"wireframe",!0).name("Wireframe").onChange(function(e){n.material.wireframe=e});var d=e.addFolder("Ambient Light");d.add(z.ambientLight,"enabled").name("Enabled").onChange(function(e){o.light.ambientLight.visible=e}),d.addColor(z.ambientLight,"color").name("Color").onChange(function(e){o.light.ambientLight.color.setHex(e)});var u=e.addFolder("Directional Light");u.add(z.directionalLight,"enabled").name("Enabled").onChange(function(e){o.light.directionalLight.visible=e}),u.addColor(z.directionalLight,"color").name("Color").onChange(function(e){o.light.directionalLight.color.setHex(e)});var m=u.add(z.directionalLight,"intensity",0,2).name("Intensity");m.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.intensity=e}),m.onFinishChange(function(){o.controls.enableRotate=!0});var g=u.add(z.directionalLight,"x",-1e3,1e3).name("Position X");g.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.position.x=e}),g.onFinishChange(function(){o.controls.enableRotate=!0});var p=u.add(z.directionalLight,"y",-1e3,1e3).name("Position Y");p.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.position.y=e}),p.onFinishChange(function(){o.controls.enableRotate=!0});var f=u.add(z.directionalLight,"z",-1e3,1e3).name("Position Z");f.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.position.z=e}),f.onFinishChange(function(){o.controls.enableRotate=!0});var b=e.addFolder("Shadow Map");b.add(z.shadow,"enabled").name("Enabled").onChange(function(e){o.light.directionalLight.castShadow=e}),b.add(z.shadow,"helperEnabled").name("Helper Enabled").onChange(function(e){o.light.directionalLightHelper.visible=e});var v=b.add(z.shadow,"near",0,400).name("Near");v.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.near=e}),v.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var w=b.add(z.shadow,"far",0,1200).name("Far");w.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.far=e}),w.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var y=b.add(z.shadow,"top",-400,400).name("Top");y.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.top=e}),y.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var L=b.add(z.shadow,"right",-400,400).name("Right");L.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.right=e}),L.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var C=b.add(z.shadow,"bottom",-400,400).name("Bottom");C.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.bottom=e}),C.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var E=b.add(z.shadow,"left",-400,400).name("Left");E.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.camera.left=e}),E.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var R=b.add(z.shadow,"bias",-1e-5,1).name("Bias");R.onChange(function(e){o.controls.enableRotate=!1,o.light.directionalLight.shadow.bias=e}),R.onFinishChange(function(){o.controls.enableRotate=!0,o.light.directionalLight.shadow.map.dispose(),o.light.directionalLight.shadow.map=null,o.light.directionalLightHelper.update()});var x=e.addFolder("Point Light");x.add(z.pointLight,"enabled").name("Enabled").onChange(function(e){o.light.pointLight.visible=e}),x.addColor(z.pointLight,"color").name("Color").onChange(function(e){o.light.pointLight.color.setHex(e)});var P=x.add(z.pointLight,"intensity",0,2).name("Intensity");P.onChange(function(e){o.controls.enableRotate=!1,o.light.pointLight.intensity=e}),P.onFinishChange(function(){o.controls.enableRotate=!0});var k=x.add(z.pointLight,"distance",0,1e3).name("Distance");k.onChange(function(e){o.controls.enableRotate=!1,o.light.pointLight.distance=e}),k.onFinishChange(function(){o.controls.enableRotate=!0});var M=x.add(z.pointLight,"x",-1e3,1e3).name("Position X");M.onChange(function(e){o.controls.enableRotate=!1,o.light.pointLight.position.x=e}),M.onFinishChange(function(){o.controls.enableRotate=!0});var O=x.add(z.pointLight,"y",-1e3,1e3).name("Position Y");O.onChange(function(e){o.controls.enableRotate=!1,o.light.pointLight.position.y=e}),O.onFinishChange(function(){o.controls.enableRotate=!0});var A=x.add(z.pointLight,"z",-1e3,1e3).name("Position Z");A.onChange(function(e){o.controls.enableRotate=!1,o.light.pointLight.position.z=e}),A.onFinishChange(function(){o.controls.enableRotate=!0});var S=e.addFolder("Hemi Light");S.add(z.hemiLight,"enabled").name("Enabled").onChange(function(e){o.light.hemiLight.visible=e}),S.addColor(z.hemiLight,"color").name("Color").onChange(function(e){o.light.hemiLight.color.setHex(e)}),S.addColor(z.hemiLight,"groundColor").name("ground Color").onChange(function(e){o.light.hemiLight.groundColor.setHex(e)});var T=S.add(z.hemiLight,"intensity",0,2).name("Intensity");T.onChange(function(e){o.controls.enableRotate=!1,o.light.hemiLight.intensity=e}),T.onFinishChange(function(){o.controls.enableRotate=!0});var F=S.add(z.hemiLight,"x",-1e3,1e3).name("Position X");F.onChange(function(e){o.controls.enableRotate=!1,o.light.hemiLight.position.x=e}),F.onFinishChange(function(){o.controls.enableRotate=!0});var j=S.add(z.hemiLight,"y",-500,1e3).name("Position Y");j.onChange(function(e){o.controls.enableRotate=!1,o.light.hemiLight.position.y=e}),j.onFinishChange(function(){o.controls.enableRotate=!0});var D=S.add(z.hemiLight,"z",-1e3,1e3).name("Position Z");D.onChange(function(e){o.controls.enableRotate=!1,o.light.hemiLight.position.z=e}),D.onFinishChange(function(){o.controls.enableRotate=!0})}function G(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(){function n(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.clock=new r.Clock,this.scene=new r.Scene,this.scene.fog=new r.FogExp2(z.fog.color,z.fog.near),window.devicePixelRatio&&(z.dpr=window.devicePixelRatio),this.renderer=new l(this.scene,e),this.camera=new h(this.renderer.threeRenderer),this.controls=new f(this.camera.threeCamera,e),this.light=new u(this.scene);["ambient","directional","point","hemi"].forEach(function(e){return t.light.place(e)}),this.geometry=new R(this.scene),this.geometry.make("plane")(150,150,10,10),this.geometry.place([0,-20,0],[Math.PI/2,0,0]),z.isDev&&z.isShowingStats&&(this.stats=new P(this.renderer),this.stats.setUp()),this.texture=new S,this.texture.load().then(function(){t.manager=new r.LoadingManager,t.model=new j(t.scene,t.manager,t.texture.textures),t.model.load(),t.manager.onProgress=function(e,t,n){console.log("".concat(e,": ").concat(t," ").concat(n))},t.manager.onLoad=function(){new Z(t.renderer.threeRenderer,t.scene,t.camera.threeCamera,t.controls.threeControls),z.isDev&&new I(t,t.model.obj),z.isLoaded=!0,t.container.querySelector("#loading").style.display="none"}}),this.render()}var e,t,o;return e=n,(t=[{key:"render",value:function(){z.isDev&&z.isShowingStats&&P.start(),this.renderer.render(this.scene,this.camera.threeCamera),z.isDev&&z.isShowingStats&&P.end(),a.a.update(),this.controls.threeControls.update(),requestAnimationFrame(this.render.bind(this))}}])&&G(e.prototype,t),o&&G(e,o),n}();n(7);(function(){if(i.webgl){var e=document.getElementById("appContainer");new V(e)}else i.addGetWebGLMessage()})()}],[[5,1,2]]]);