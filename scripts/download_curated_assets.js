const https = require("https");
const fs = require("fs");
const path = require("path");

const assets = [
  // Hero & Philosophy
  {
    dest: "public/images/hero/hero-main.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=2000&q=88&auto=format&fit=crop",
  },
  {
    dest: "public/images/hero/philosophy-portrait.jpg",
    url: "https://images.unsplash.com/photo-1620352408765-7b2be0ae5571?w=1400&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/hero/maison-atelier.jpg",
    url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=85&auto=format&fit=crop",
  },

  // Collections
  {
    dest: "public/images/collections/signature-edit.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=1400&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/collections/form-feeling.jpg",
    url: "https://images.unsplash.com/photo-1620352408765-7b2be0ae5571?w=1400&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/collections/evening-study.jpg",
    url: "https://images.unsplash.com/photo-1765870973969-021f1dc84a27?w=1400&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/collections/architectural-silhouettes.jpg",
    url: "https://images.unsplash.com/photo-1790384071299-7cbf39d4282f?w=1400&q=85&auto=format&fit=crop",
  },

  // Campaigns
  {
    dest: "public/images/campaigns/campaign-act1.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=1600&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/campaigns/campaign-act2.jpg",
    url: "https://images.unsplash.com/photo-1765870973969-021f1dc84a27?w=1600&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/campaigns/campaign-act3.jpg",
    url: "https://images.unsplash.com/photo-1620352408765-7b2be0ae5571?w=1600&q=85&auto=format&fit=crop",
  },

  // Products
  {
    dest: "public/images/products/greatcoat.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/column-gown.jpg",
    url: "https://images.unsplash.com/photo-1765870973969-021f1dc84a27?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/velvet-jacket.jpg",
    url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/cape-coat.jpg",
    url: "https://images.unsplash.com/photo-1790384071299-7cbf39d4282f?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/wide-trouser.jpg",
    url: "https://images.unsplash.com/photo-1620352408765-7b2be0ae5571?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/leather-bag.jpg",
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/velvet-corset.jpg",
    url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/products/gold-choker.jpg",
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85&auto=format&fit=crop",
  },

  // Craft & Details
  {
    dest: "public/images/details/fabric-wool.jpg",
    url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/details/hand-stitch.jpg",
    url: "https://images.unsplash.com/photo-1544441893-675973e31985?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/details/canvas.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/details/hardware.jpg",
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=85&auto=format&fit=crop",
  },

  // Journal
  {
    dest: "public/images/journal/study-burgundy.jpg",
    url: "https://images.unsplash.com/photo-1770235623084-7fde436a781d?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/journal/style-language.jpg",
    url: "https://images.unsplash.com/photo-1790384071299-7cbf39d4282f?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/journal/new-silhouette.jpg",
    url: "https://images.unsplash.com/photo-1620352408765-7b2be0ae5571?w=1200&q=85&auto=format&fit=crop",
  },
  {
    dest: "public/images/journal/simplicity.jpg",
    url: "https://images.unsplash.com/photo-1765870973969-021f1dc84a27?w=1200&q=85&auto=format&fit=crop",
  },
];

async function downloadAsset(item) {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(__dirname, "..", item.dest);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullPath);
    https
      .get(item.url, (res) => {
        if (res.statusCode === 200) {
          res.pipe(file);
          file.on("finish", () => {
            console.log("Saved:", item.dest);
            resolve();
          });
        } else {
          console.error("Failed to download:", item.url, res.statusCode);
          resolve(); // don't crash
        }
      })
      .on("error", (err) => {
        console.error("Error downloading:", item.dest, err.message);
        resolve();
      });
  });
}

async function run() {
  console.log("Starting asset download for ORRÉ Maison...");
  for (const asset of assets) {
    await downloadAsset(asset);
  }
  console.log("All brand assets localized successfully!");
}

run();
