import sys
from PIL import Image

def flood_fill_bg(input_path, output_path, tolerance=15):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    target_r, target_g, target_b, _ = pixels[0, 0]
    
    visited = set()
    queue = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    for q in queue:
        visited.add(q)
        
    head = 0
    while head < len(queue):
        x, y = queue[head]
        head += 1
        
        r, g, b, a = pixels[x, y]
        
        if abs(r - target_r) < tolerance and abs(g - target_g) < tolerance and abs(b - target_b) < tolerance:
            pixels[x, y] = (r, g, b, 0)
            
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # Soften edges slightly by checking transparent neighbors
    for y in range(1, height-1):
        for x in range(1, width-1):
            r, g, b, a = pixels[x, y]
            if a == 255: # opaque
                # if it has a transparent neighbor, make it semi-transparent for anti-aliasing
                trans_neighbors = 0
                for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                    if pixels[x+dx, y+dy][3] == 0:
                        trans_neighbors += 1
                if trans_neighbors > 0:
                    pixels[x, y] = (r, g, b, max(0, 255 - trans_neighbors * 50))

    img.save(output_path)

if __name__ == '__main__':
    flood_fill_bg(sys.argv[1], sys.argv[2])
