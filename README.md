# ASCIIBEAN

Inspired by the donut.c code and the article titled "Donut math: how donut.c works", the ASCII bean uses mathematical formulas and ASCII art rendering to create an ASCII representation of the Chicago bean, just as the donut.c code did for a torus.

# The Code

The code provided in the article draws a torus using ASCII characters. It's a framebuffer combined with a Z-buffer to render these characters. By plotting pixels densely along the surface of the torus, the final output looks solid without needing raytracing. ASCII characters ranging from .,-~:;=!*#$@ are used to represent the illumination value of the surface at each point, going from dimmest to brightest.

# Mathematics Behind

To understand how to plot an ASCII bean, we must first comprehend the math behind the donut. 3D objects are projected onto a 2D screen. Points in 3D-space (x,y,z) are projected onto a plane at distance z' to give the corresponding 2D position (x',y'). This is represented mathematically as:

y′z′=yz
(x′,y′)=(K1x/z,K1y/z)

where K1 is a constant representing screen distance.

The donut, or torus, is essentially a circle rotated about an axis. The formula to represent a point on the circle is:

(x,y,z)=(R2+R1×cos(θ),R1×sin(θ),0)

The circle is then rotated around the y-axis, followed by rotations around x and z axes represented by angles A and B respectively.

The complex math formula obtained after all rotations is:

(x,y,z)=(R2+R1cosθ)(cosBcosϕ+sinAsinBsinϕ)−R1cosAsinBsinθ,(R2+R1cosθ)(cosϕsinB−cosBsinAsinϕ)+R1cosBsinθ,cosA(R2+R1cosθ)sinϕ+R1sinAsinθ)

Lastly, to decide which ASCII character to plot for a point on the torus, the direction perpendicular to the surface at each point, or the surface normal, is required. Using the dot product of the surface normal with a chosen light direction gives us the luminance of the point, determining which character to use.

# ASCII Bean Formula

While the provided article explains how to plot a torus, to create an ASCII bean, we need to modify the mathematical equations. This would involve adjusting the radii and perhaps the angles of rotation to create a shape that looks more like a bean than a torus. Once the mathematics for the bean shape is in place, the rest of the logic, including the ASCII rendering, can be borrowed from the donut.c logic.

# Final Words

Amidst the towering skyscrapers and the timeless rhythm of Chicago's South Side, a unique blend of mathematics and art comes alive. It's where code, pixels, and imagination intertwine, where the simple strokes of a keyboard manifest as intricate patterns on a screen. It's where the digital and tangible worlds merge, echoing the spirit of a community that has always celebrated resilience and innovation.

Understanding the underpinnings of the legendary donut.c is not just about recognizing numbers or patterns. It is about unearthing the heart of an equation, feeling the pulse of every pixel, and harnessing that knowledge to breathe life into new shapes. Shapes like our beloved ASCII bean.

Envision the bean, a symbol of growth and potential, inspired by the very soul of the South Side. By delving into the wonders of 3D transformations and fine-tuning the parameters, we unlock the magic that renders our bean with eloquent ASCII characters.

This is more than mere math; it's an ode to the beauty that lies in every line of code. It's a tribute to Chicago, to the South Side, and to every soul that believes in the power of dreams.

Together, let's embark on this journey, transforming the abstract into the tangible, one ASCII character at a time <3

-Mark Nguyen
