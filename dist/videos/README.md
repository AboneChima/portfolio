# Video Assets

## How to Add Your Screen Recording

1. **Place your video file** in this `/public/videos/` folder
2. **Rename it** to something descriptive like `portfolio-demo.mp4`
3. **Update the project** in `src/components/Projects.jsx`:

```javascript
// Find the Oracle GPT project and update the video property:
{
  title: "Oracle GPT",
  // ... other properties
  video: "/videos/portfolio-demo.mp4", // Add your video path here
  featured: true
}
```

## Video Requirements

- **Format**: MP4 (recommended)
- **Size**: Keep under 10MB for web performance
- **Duration**: 10-30 seconds is ideal for auto-playing previews
- **Resolution**: 1920x1080 or 1280x720

## Alternative Approaches

### Option 1: Hero Section Video Background
You could also use your screen recording as a background video in the Hero section for maximum impact.

### Option 2: Dedicated Demo Section
Create a separate "Live Demo" section showcasing your portfolio creation process.

### Option 3: Project Gallery
Use the video as part of a project gallery with multiple views of your work.

## Performance Tips

- Compress your video using tools like HandBrake
- Consider using WebM format for better compression
- Add loading states for better user experience