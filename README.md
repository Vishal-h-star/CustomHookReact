Hi ...
Here is my project link deployed on Netlify
copy link below 👇
link : https://custom-hook-82a85d.netlify.app/

During this project, I faced several challenges that helped me understand React more deeply:
 1. Initially, I was quite confused about how to properly handle loading, error, and data states in one place using a custom hook.
 2. Eventually, I realized the importance of using useState for managing all three — loading, error, and fetched data — together in a clean, centralized way.
 3. I also struggled to understand why and how to use callbacks. After some exploration, I discovered that by wrapping my fetchData function inside useCallback, I could memoize it and prevent unnecessary re-renders.
 4. To trigger the data fetching on page load, I used useEffect, ensuring the fetch runs once when the component mounts.
 5. Lastly, I ran into CORS errors when loading some images. (**With the help of my mentor he help me alot**), I implemented a proper fallback image mechanism, which made my UI much more reliable.
