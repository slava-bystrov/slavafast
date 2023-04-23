import youtube from '../../assets/img/youtube.svg'
import facebook from '../../assets/img/facebook.svg'
import { ComponentSize } from '../../constants/component-size'
import classNames from 'classnames'
import './Socials.sass'

interface SocialsProps {
  size?: ComponentSize.S | ComponentSize.L
}

export default function Socials({ size = ComponentSize.S }: SocialsProps) {
  return <div className={classNames({ 'Socials': true, 'Socials_L': size === ComponentSize.L })}>
    <div className="Socials__Icon">
      <a
        className='Socials__Link'
        href='https://www.instagram.com/_slava_fast/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(3.55556,3.55556)"><path d="M35.75,14c-20.171,0 -21.75,1.579 -21.75,21.75v0.5c0,20.171 1.579,21.75 21.75,21.75h0.5c20.171,0 21.75,-1.579 21.75,-21.75v-0.5c0,-20.171 -1.579,-21.75 -21.75,-21.75zM30,22h12c7.419,0 8,0.581 8,8v12c0,7.419 -0.581,8 -8,8h-12c-7.419,0 -8,-0.581 -8,-8v-12c0,-7.419 0.581,-8 8,-8zM45.49609,25c-0.828,0.002 -1.49809,0.67491 -1.49609,1.50391c0.002,0.828 0.67491,1.49809 1.50391,1.49609c0.828,-0.002 1.49809,-0.67491 1.49609,-1.50391c-0.002,-0.828 -0.67491,-1.49809 -1.50391,-1.49609zM35.97656,26c-5.522,0.013 -9.98956,4.50144 -9.97656,10.02344c0.013,5.522 4.50144,9.98956 10.02344,9.97656c5.522,-0.013 9.98956,-4.50144 9.97656,-10.02344c-0.013,-5.522 -4.50144,-9.98956 -10.02344,-9.97656zM35.99023,32c2.209,-0.005 4.00377,1.78123 4.00977,3.99023c0.005,2.209 -1.78123,4.00477 -3.99023,4.00977c-2.209,0.005 -4.00377,-1.78123 -4.00977,-3.99023c-0.005,-2.209 1.78123,-4.00377 3.99023,-4.00977z"></path></g></g></svg>
      </a>
    </div>
    <div className="Socials__Icon">
      <a
        className='Socials__Link'
        href='https://www.youtube.com/channel/UC10cUaWNu1gFyMwbLJh6uOw'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(3.55556,3.55556)"><path d="M36,17c-19.195,0 -21.75875,0.19789 -24.21875,2.71289c-2.46,2.514 -2.78125,6.51011 -2.78125,16.28711c0,9.777 0.32125,13.77211 2.78125,16.28711c2.46,2.515 5.02375,2.71289 24.21875,2.71289c19.195,0 21.75875,-0.19789 24.21875,-2.71289c2.46,-2.515 2.78125,-6.51011 2.78125,-16.28711c0,-9.777 -0.32125,-13.77311 -2.78125,-16.28711c-2.46,-2.515 -5.02375,-2.71289 -24.21875,-2.71289zM44.16016,24.99609c6.53363,0.01313 8.5533,0.13417 9.37305,0.88867c1.094,1.005 1.4668,3.70123 1.4668,10.11523c0,6.414 -0.3728,9.11023 -1.4668,10.11523c-1.093,1.006 -4.3182,0.88477 -17.5332,0.88477c-13.215,0 -16.4392,0.12023 -17.5332,-0.88477c-1.094,-1.005 -1.4668,-3.70123 -1.4668,-10.11523c0,-6.414 0.5348,-9.19623 1.4668,-10.11523c0.932,-0.919 4.3182,-0.88477 17.5332,-0.88477c3.30375,0 5.98228,-0.00828 8.16016,-0.00391zM31.44531,28.16797v15.66406l13.62305,-7.89453z"></path></g></g></svg>
      </a>
    </div>
    <div className="Socials__Icon">
      <a
        className='Socials__Link'
        href='https://www.facebook.com/profile.php?id=100078414158665'
        target='_blank'
        rel='noopener noreferrer'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(3.55556,3.55556)"><path d="M29.5,14c-14.375,0 -15.5,1.125 -15.5,15.5v13c0,14.375 1.125,15.5 15.5,15.5h13c14.375,0 15.5,-1.125 15.5,-15.5v-13c0,-14.375 -1.125,-15.5 -15.5,-15.5zM26,22h20c3.71,0 4,0.29 4,4v20c0,3.71 -0.29,4 -4,4h-5.35547v-7.93555h4.37891l0.65625,-5.21875h-5.03711v-3.65625c0,-1.448 0.97953,-2.19141 2.01953,-2.19141c1.04,0 3.19336,-0.02734 3.19336,-0.02734v-4.67187c0,0 -1.91705,-0.2207 -3.87305,-0.2207c-1.645,0 -3.4543,0.46213 -4.9043,1.95313c-1.475,1.516 -1.6875,3.75433 -1.6875,6.48633v2.32813h-4.39062v5.21875h4.39063v7.93555h-9.39062c-3.71,0 -4,-0.29 -4,-4v-20c0,-3.71 0.29,-4 4,-4z"></path></g></g></svg>
      </a>
    </div>
  </div>
}