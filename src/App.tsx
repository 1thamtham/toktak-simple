  const [videos, setVideos] = useState<VideoItem[]>(() => {
    try {
      const saved = localStorage.getItem('toktak_my_videos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading videos', e);
    }
    
    // ถ้าไม่มีข้อมูลในเครื่องจริงๆ ให้ดึงชุดตั้งต้นที่มั่นใจว่าแสดงผลได้ทันที (ไม่ใช่หน้าจอดำ)
    const initialDefault: VideoItem[] = [
      {
        id: 'default-1',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        posterUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
        caption: 'มอเตอร์ไซค์ไฟฟ้าประดิษฐ์เอง ฝีมือคนไทยสุดเจ๋ง!',
        creatorName: 'Golden River City',
        creatorHandle: '@goldenrivercity',
        likesCount: 1540,
        musicTitle: 'Original Sound - TokDesign Creator',
        isLiked: false,
        isPrivate: false,
        isDraft: false
      }
    ];
    
    // บันทึกค่าเริ่มต้นลง localStorage ทันที เพื่อให้รอบถัดไปจำค่านี้ได้
    try {
      localStorage.setItem('toktak_my_videos', JSON.stringify(initialDefault));
    } catch (e) {}

    return initialDefault;
  });
       
   
      

  
          
     
