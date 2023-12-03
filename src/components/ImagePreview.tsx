import tag from '../../public/icon/tag.svg'
import person from '../../public/icon/person.svg'
import eye from '../../public/icon/eye.svg'
import document from '../../public/icon/document.svg'

type ImagePreviewProps = {
    className: string
    project: string
    techstack: string
    client: string
    preview: string
    image: string
}

export default function ImagePreview({ className, project, techstack, client, preview, image }: ImagePreviewProps) {
  return (
    <div className={`${className} m-auto px-5 py-8 overflow-hidden rounded-2xl font-poppins text-center w-[500px] h-fit bg-[#252525]`}>
        <div className="absolute top-0 bg-black opacity-50 w-full h-full left-0"></div>

        <div className='text-2xl font-bold text-[#FFB400]'>IMAGE PROJECT</div>

        <div className='flex justify-between mt-4 text-white text-start text-xs'>
            <div>
                <div><img src={document} className='inline mr-3 w-3' /> Project : {project}</div>
                <div className='mt-2'><img src={tag} className='inline mr-2 w-4' /> Techstack : {techstack}</div>
            </div>
            <div>
                <div><img src={person} className='inline mr-3 w-4' /> Client : {client}</div>
                <div className='mt-2'><img src={eye} className='inline mr-3 w-4' /> Preview : <a href='#' className='underline hover:no-underline text-[#FFB400]'>{preview}</a></div>
            </div>
        </div>
        
        <img src={image} className='mt-10 rounded-xl' alt="" />
    </div>
  )
}
