# Guide for Updating Your Personal Website

## Updating Profile Picture

1. Open `src/components/About.tsx`
2. Find the `<img>` tag
3. Update the `src` attribute with your new image URL:

```jsx
<img
  src="https://your-new-image-url.com/image.jpg"
  alt="Abdul Motalib Samir"
  className="rounded-full w-64 h-64 object-cover mx-auto"
/>
```

## Adding Blog Posts

1. Open `src/components/Blog.tsx`
2. Add a new blog post by copying and modifying the existing structure:

```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <BookOpen size={32} className="mb-4 text-blue-500" />
  <h3 className="text-xl font-semibold mb-2">Your New Blog Post Title</h3>
  <p>A brief summary of your new blog post.</p>
  <a href="/path-to-full-article" className="text-blue-500 hover:underline">Read more</a>
</div>
```

## Updating Experience

1. Open `src/components/Experience.tsx`
2. Update the `programmingLanguages` and `technologies` arrays:

```jsx
const programmingLanguages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Your New Language'];
const technologies = ['React', 'Node.js', 'Git', 'VS Code', 'GitHub', 'Your New Technology'];
```

## Adding Achievements and Updating Education

1. Open `src/components/Achievements.tsx`
2. Update the content within the existing divs or add new ones:

```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <Award size={32} className="mb-4 text-yellow-500" />
  <h3 className="text-xl font-semibold mb-2">New Certification</h3>
  <p>Details about your new certification</p>
</div>
```

## Updating Contact Information

1. Open `src/components/Contact.tsx`
2. Update the email and social media links:

```jsx
<a href="mailto:your.new.email@example.com" className="hover:text-blue-500">your.new.email@example.com</a>
```

```jsx
<a href="https://github.com/your-new-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
  <Github size={24} />
</a>
```

## Updating About Me

1. Open `src/components/About.tsx`
2. Update the text content in the `<p>` tag:

```jsx
<p className="mb-4">
  Your updated bio goes here. Describe your new experiences, goals, and interests.
</p>
```

Remember to save all changes and restart your development server to see the updates reflected on your website.