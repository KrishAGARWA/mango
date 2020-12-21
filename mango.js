class Mango{
constructor(x,y){
 var options={
isStatic:true,
restitution:0,
friction:1
 }
this.body=Bodies.circle(x,y,40,options)
this.radius=40
this.image=loadImage("mango.png")
    World.add(world,this.body)

 



}
display(){
var po=this.body.position
imageMode(CENTER)
ellipseMode(RADIUS)
image(this.image,po.x,po.y,40,40)

}




}