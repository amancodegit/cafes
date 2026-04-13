import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const images = {
    'logo.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dishoom_logo.png/640px-Dishoom_logo.png',
    'hero.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070',
    'dish1.jpg': 'https://images.unsplash.com/photo-1601050690598-df056fb082ad?auto=format&fit=crop&q=80&w=1000',
    'dish2.jpg': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=1000',
    'dish3.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000',
    'gallery1.jpg': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000',
    'gallery2.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
    'gallery3.jpg': 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80&w=1000',
    'gallery4.jpg': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000',
};

async function download() {
    const assetsDir = path.join(__dirname, 'src', 'assets');
    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

    for (const [filename, url] of Object.entries(images)) {
        try {
            console.log(`Downloading ${filename} from ${url}...`);
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const buffer = await res.arrayBuffer();
            fs.writeFileSync(path.join(assetsDir, filename), Buffer.from(buffer));
            console.log(`Saved ${filename}`);
        } catch (err) {
            console.error(`Error downloading ${filename}: ${err.message}`);
        }
    }
}

download();
