'use client'
import { useRouter } from 'next/navigation'
import { ArrowBackIcon } from './Icons'
import useCheckCargoLiveFromClient from '../(cargo-count)/cargo-utils/cargo-live-client';

const GoBackBtn = ({ title, path }: { title: string; path: string }) => {
  const router = useRouter()

  const handleNavigation =  () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCheckCargoLiveFromClient(()=> {
      router.push(path)
    })
  }

  return (
    <div className="flex gap-x-[10px] items-center" >
      <ArrowBackIcon cursor={'pointer'} boxSize={'24px'} onClick={handleNavigation}/>
      <span className="text-[24px] font-medium">{title}</span>
    </div>
  )
}

export default GoBackBtn
