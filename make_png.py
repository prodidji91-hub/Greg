import zlib
import struct

width, height = 180, 180

bg_color = (27, 48, 34, 255)
gold_color = (197, 160, 89, 255)

pixels = bytearray()
for y in range(height):
    pixels.append(0) # filter type 0
    for x in range(width):
        dx = x - 90
        dy = y - 90
        
        is_toucan = False
        # Body
        if -25 <= dx <= 25 and -25 <= dy <= 30:
            is_toucan = True
        # Large prominent beak extending to the right
        if 20 <= dx <= 75 and -15 <= dy <= 8:
            is_toucan = True
        # Head
        if 10 <= dx <= 45 and -40 <= dy <= -20:
            is_toucan = True
        # Tail extending to the bottom-left
        if -65 <= dx <= -20 and 15 <= dy <= 55:
            is_toucan = True
            
        color = gold_color if is_toucan else bg_color
        pixels.extend(color)

def write_png(filename, width, height, pixels):
    def png_chunk(chunk_type, data):
        return struct.pack('>I', len(data)) + chunk_type + data + struct.pack('>I', zlib.crc32(chunk_type + data) & 0xFFFFFFFF)

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    compressed = zlib.compress(bytes(pixels), 9)
    
    with open(filename, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        f.write(png_chunk(b'IHDR', ihdr))
        f.write(png_chunk(b'IDAT', compressed))
        f.write(png_chunk(b'IEND', b''))

write_png('public/apple-touch-icon.png', width, height, pixels)
print("Apple touch icon generated successfully!")
