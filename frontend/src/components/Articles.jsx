import React from 'react'
import Button from './ui/Button'

export default function Articles() {
  return (
    <>
    <div className="flex flex-col pb-12 lg:flex-row">
          <h2 className="mb-4 grow font-bold">Read our latest articles</h2>
          <Button className="min-w-full md:min-w-56">
            Browse all articles
          </Button>
        </div>
        <div className="article grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="article-Card relative min-h-[450px] w-full rounded-2xl border border-gray shadow-sm">
            <img
              className="max-w-full rounded-t-2xl object-cover object-center"
              src="./images/img.jpg"
              alt="article_id"
            />
            <div className="mb-6 space-y-4 p-6">
              <div className="flex space-x-1">
                <p className="text-fs-sm">March 5, 2024 •</p>
                <p className="text-fs-sm">5 min read</p>
              </div>
              <h5 className="font-bold">
                Turning Dreams into Achievable Targets
              </h5>
              <p className="text-fs-base">
                Discuss how virtual reality is revolutionizing the way potential
                buyers explore
              </p>
            </div>
          </div>
        </div>
    </>
    
  )
}
