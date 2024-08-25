# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
import math
class Shape:
    def __init__(self,name):
        self.name=name
    
    def setName(self,name):
        self.name=name
        
    def getName(self):
        return self.name

class Rectangle(Shape):
    def __init__(self,name,l,b):
        self.length=l
        self.breadth=b
        Shape.__init__(self,name)
    
    def calcArea(self):
        return self.length*self.breadth
        

class Circle(Shape):
    def __init__(self,name,radius):
        self.radius=radius
        Shape.__init__(self,name)
    
    def calcArea(self):
        return math.pi*self.radius*self.radius

rect1=Rectangle("rectangle",20,50)
circ1=Circle("Circle",7)
print("Area of rectangle: ",rect1.calcArea())
print("Area of circle: ",circ1.calcArea())