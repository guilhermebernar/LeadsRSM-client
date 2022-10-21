import { BackgroundLp, VideoLp } from "./Presentation.page.style"

const PresentationPage = () => {
       return(
        <BackgroundLp>
            <VideoLp autoPlay muted>
                <source src="/rsmlpvideo.mp4" type='video/mp4' />
            </VideoLp>
        </BackgroundLp>
       ) 
}

export default PresentationPage