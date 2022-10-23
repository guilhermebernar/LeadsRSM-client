import { BackgroundLp, VideoLp } from "./Presentation.page.style"
import { Contexts } from '../../providers/Context';
import { useContext } from 'react';

const PresentationPage = () => {
    const {end} = useContext(Contexts)
    const ok = () => {return end()}

    return(
        <>
        <BackgroundLp>
            <VideoLp 
                autoPlay 
                muted 
                onEnded={ok}>
                <source 
                    src="/rsmlpvideo.mp4" 
                    type='video/mp4' 
                />
            </VideoLp>
        </BackgroundLp>
        </>
       ) 
}

export default PresentationPage