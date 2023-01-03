
import React, {useEffect, useRef, useState} from "react";
import logo from './background.png'

export default function Mygame(){
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const CANVAS_WIDTH = canvas.width = 800;
        const CANVAS_HEIGHT= canvas.height = 500;
        const gravity = 0.5

        class Sprite{
            constructor({position, imageSrc}){
                this.position = position
                this.image = new Image()
                this.image.src = imageSrc
            }

            draw(){
                if(!this.image) return 

                ctx.drawImage(this.image, 0, 0)
            }
            update(){
                this.draw();
            }
        }

        class Player{
            constructor(position){
                this.position = position;
                this.velocity = {
                    x:0,
                    y:1,
                }
                this.height = 50
            }
    
            draw(){
                ctx.fillStyle = "green";
                ctx.fillRect(this.position.x, this.position.y, 50, this.height);
            }

            update(){
                this.draw()

                this.position.x += this.velocity.x

                this.position.y += this.velocity.y

                //check grivity next frame
                if(this.position.y + this.height + this.velocity.y < CANVAS_HEIGHT)
                    this.velocity.y += gravity
                else
                    this.velocity.y = 0
            }
        }

        const player = new Player({x:0, y:0})
        const player2 = new Player({x:90, y:80})

        const background = new Sprite({position:{
                x:0,
                y:0
            },
            imageSrc:logo
        })

        //ArrowDown
        //ArrowUp
        //ArrowRight
        //ArrowLeft

        const keys ={
            ArrowUp:{
                pressed: false
            },
            ArrowDown:{
                pressed:false
            },
            ArrowRight:{
                pressed:false
            },
            ArrowLeft:{
                pressed:false
            }
        }

        const animation = () =>{
            //ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //background 
            
            background.update()
            player.update()
            player2.update()

            player.velocity.x = 0

            if(keys.ArrowRight.pressed) player.velocity.x = 5
            else if(keys.ArrowLeft.pressed) player.velocity.x = -5
            
            requestAnimationFrame(animation) 
        }
        
        animation();

		function runnCoderGame(){
			console.log("test");
		}

        window.addEventListener('keydown', (event)=>{
            switch(event.key){
                case 'ArrowUp':
                    player.velocity.y = -10
                    break;
                case 'ArrowDown':
                    keys.ArrowDown.pressed = true
                    break;
                case 'ArrowRight':
                    keys.ArrowRight.pressed = true
                    break;
                case 'ArrowLeft':
                    keys.ArrowLeft.pressed = true
                    break;   
            }
        })

        window.addEventListener('keyup', (event)=>{
            switch(event.key){
                case 'ArrowRight':
                    keys.ArrowRight.pressed = false
                    break;
                case 'ArrowLeft':
                    keys.ArrowLeft.pressed = false
                    break; 
            }
        })

    }, [])
    

    return <canvas id="canvas" ref={canvasRef} /> 

};
