# ParkMan Assignment
## Project overview
An Front-end Developer assignment assigned by ParkMan. A pixel-perfect implementation inspired by ParkMan's "How it works" webpage.


https://user-images.githubusercontent.com/26543329/125447444-420d0e9a-2c1f-48be-9a01-91c52c0d8129.mov

## Technology stacks
__Core__
- VueJS with composition API
- Vuex
- Axios
- SASS

__External libraries__
- ``vue-star-rating`` - for displaying user review rating in stars. [Details](https://www.npmjs.com/package/vue-star-rating)
- ``vue-final-modal`` - for prompting up ParkMan's youtube video demo. [Details](https://v3.vue-final-modal.org/)
- ``mapbox-gl`` - for integrating an interactive map displaying ParkMan HQ's location.  [Details](https://docs.mapbox.com/mapbox-gl-js/api/)

__Compiling Environment__
- Node version 14.17

## Running the app
- To start the app in local environment, run the command:
``npm run serve``
- The app then will be served at http://localhost:8080/.

## Project folder structure
```bash
├───assets/
├───components/
├───store/
├───styles/
├───views/
│   ├───LandingPage
├───README.md
├───.env
├───package.json
├───.gitignore
```
__assets__

Contains all the static assets (images, icons) used in the application.


__components__

Contains all commonly shared UI components.


__styles__

Contains all global styles and css variables according to the design system.


__views__

Contains wrapper component acts as page layout for main views.

## Responsiveness and cross-browser compability

This app supports all devices and is compatible with Chrome, Safari, Firefox, and Microsoft Edge.

![IMG_8F527D9D8676-1](https://user-images.githubusercontent.com/26543329/125452250-1ce80aaa-ac18-498d-883a-6a03859502e2.jpeg)
![IMG_E349853F4A9C-1](https://user-images.githubusercontent.com/26543329/125452453-ae4fa2ef-ccc0-40a6-86d3-a3d134ad51ec.jpeg)

## Development process related explanation
#### 1. Separating styling from UI file 
- In VueJS, by nature a ``.vue`` file will contain 3 main parts of ``template``, ``script`` and ``style``, all css style could be written within ``style`` tag. However, this practice might unnecessarily lengthen the file, possibly causing difficulties for maintainance or adding adjustments in the long run.
- Adopting best practice from React, a component will have a structure like this:

![Screenshot 2021-07-13 at 16 29 17](https://user-images.githubusercontent.com/26543329/125460343-2db5d81b-5fdb-4d80-a0cf-5e5ed92b105b.png)

where the styling file then will be imported within the ``style`` tag

![Screenshot 2021-07-13 at 16 31 22](https://user-images.githubusercontent.com/26543329/125462203-c1bc3012-92b7-481a-a12b-38d8424c2b4e.png)

### 2. Micro Front-end & Media queries
- BEM naming convention was used to fully utilized SASS pre-processor syntax. However, in order to take fully control of what is going on block by block of elements, the author has decided to write the media queries __within__ a block css selector.

__Traditional approach:__

 ```
 .block {
      //styling here
    }
 
    @media (min-width: 768px) and (max-width: 1439px) {
      .block {
        //tablet
      }
    }
  
    @media (max-width: 767px) {
      .block {
        //mobile
      }
    }
```

__Micro-Frontend approach:__
```
.block {
     //styling here

    @media (min-width: 768px) and (max-width: 1439px) {
        //tablet
    }
  
    @media (max-width: 767px) { 
        //mobile
    }
}
```
- With this approach, the author would have to spend a little more of his effort to re-write media queries. However, by just inspecting each element css block, developer will have much easier time to figure out how that element will look like in another viewports.

### 3. Custom section implementation

Following the requirements, the author came up with an idea of integrating a map which displays ParkMan's HQ location and a funny message will prompt up each time a user click on the marker.
- Using Mapbox GL and Mapbox API.
- The map is fully interactive.

![Screenshot 2021-07-13 at 17 43 57](https://user-images.githubusercontent.com/26543329/125472564-116d8edd-68c4-4547-888c-69502c6161ab.png)

#### That's it for now, thank you :D
