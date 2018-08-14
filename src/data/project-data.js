import Biome1 from '../images/biome1.png';
import Biome2 from '../images/biome2.png';
import Biome3 from '../images/biome3.png';
import Biome4 from '../images/biome4.png';
import Graph1 from '../images/graph.png';
import Graph2 from '../images/graph1.png';
import Beast1 from '../images/beast1.png';
import Beast2 from '../images/beast2.png';
import Beast3 from '../images/beast3.png';
import Beast4 from '../images/beast4.png';
import Beast5 from '../images/beast5.png';
import Beast6 from '../images/beast6.png';

const data = [
    {
        name: "Resume.pdf"
    },
    {
        name: "Biome Tool.ts",
        tech: "Backbone.js - Angular - Node - CoffeScript - Electron",
        features: 'Node system - Procedural Terrain Generation (Nerd Kingdom Inc.)',
        images: [ Biome3, Graph1, Biome4, Graph2, Biome1, Biome2 ]     
    },
    {
        name: "Minecraft Clone.cpp",
        tech: "C++ - OpenGL",
        features: "Perlin Noise - Infinite Generation - Lighting - Growing Grass - Building Block - Water",
        videoId: "sbdvmjR18zo",
        repo: "https://github.com/HoangNguyen174/MinecraftClone"
    },
    {
        name: "Deferred Rendering.js",
        tech: "Javascript - WebGL - GLSL",
        features: "Defered Rendering - SSAO - 3D Model",
        demoLink: "https://deferred-rendering.herokuapp.com",
        repo: "https://github.com/HoangNguyen174/Agni",        
        images: [ Beast1, Beast2, Beast3, Beast4, Beast5, Beast6 ]             
    },
    {
        name: "Deferred Rendering.cpp",
        tech: "C++ - OpenGL - GLSL",
        features: "Defered Rendering - SSAO - Shadow Mapping - 3D Model - Animation",
        videoId: "JUgy4bOYKDg",
        repo: "https://github.com/HoangNguyen174/DeferredRendering"
    },
    {
        name: "Terrain Generation.cpp",
        tech: "C++ - OpenGL - GLSL",
        features: "Marching Cube - Water Surface - Billboard",
        videoId: "lumQZ2rsqCs",
        repo: "https://github.com/HoangNguyen174/TerrainGeneration"
    },
    {
        name: "City Generation.cpp",
        tech: "C++ - OpenGL - GLSL",
        features: "Random City Block Generation - Traffic - Blur Effect",
        videoId: "iC8dgKHLOok",
        repo: "https://github.com/HoangNguyen174/ProceduralCityGeneration"
    },
    {
        name: "Cloth Simulation.cpp",
        tech: "C++ - OpenGL - GLSL",
        features: "Spring System - Sphere/Sphere Collision - Forward Euler",
        videoId: "6Dqws3SNCl4",
        repo: "https://github.com/HoangNguyen174/ClothSimulation"
    },
    {
        name: "Shader Effects.cpp",
        tech: "C++ - OpenGL - GLSL",
        features: "Lighting - Bump Map - Parallax Occlusion",
        videoId: "j3w6T6SPGFE",
        repo: "https://github.com/HoangNguyen174/ShaderEffects"
    },
    {
        name: "Human vs Alien.cpp",
        tech: "C++ - OpenGL",
        features: "Data Driven - Random Map Generation - UI",
        videoId: "9b-9mUmx-Yw",
        repo: "https://github.com/HoangNguyen174/HumanVsAlien"
    },
    {
        name: "Inua.ue",
        tech: "Unreal Engine 4",
        features: "3D - Action - Puzzle - First Person",
        videoId: "FO425vb8mSU",
    },
    {
        name: "Battle of the Banderas.ue",
        tech: "Unreal Development Kit",
        features: "Death Match - FPS - Music - Comedy",
        videoId: "H8Bu9mEwW9Q",
    },
    {
        name: "Fists of Freedom.unity",
        tech: "Unity 2D",
        features: "2D - Side Scroller - Brawler - Comedy",
        videoId: "X1Fuviph3SQ",
    },
];

let Projects = new Map(data.map( i => [i.name, i]));


export default Projects;