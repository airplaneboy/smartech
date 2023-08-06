import { MdArrowDropDown } from 'react-icons/md';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import kebabCase from 'lodash.kebabcase';
import Link from 'next/link';
import React from 'react';

const Courses = ({ courses, classNames }: { courses: any; classNames: Function }) => {
  return (
    <div>
      <Menu as='div' className='flex-shrink-0  max-sm:hidden'>
        <Menu.Button
          type='button'
          className='max-sm:hidden relative inline-flex items-center px-4 py-2 border border-transparent  text-md font-bold rounded-md text-indigo-700 bg-transparent hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          {({ open }) => (
            <>
              <span className='sr-only'>Open courses menu</span>
              Courses
              <MdArrowDropDown
                size={25}
                className={classNames(open ? 'ml-2 -mr-1 rotate-180' : 'ml-2 -mr-1')}
                aria-hidden='true'
              />
            </>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          {/* */}
          <Menu.Items className='border overflow-scroll max-h-full h-[90%] z-50 origin-top-right fixed left-1/2 -translate-x-1/2 mt-2 max-w-8xl w-[90%] rounded-md shadow-xl grid lg:grid-cols-3 md:grid-cols-2 gap-3 bg-white px-2 '>
            {courses?.map((subject: any) => (
              <Menu.Item key={subject?._id}>
                {({ active }) => (
                  <div className='flex px-8 text-sm text-gray-700 flex-col capitalize pt-5'>
                    <Link
                      href={`/${subject?.slug}`}
                      className={classNames(active ? 'text-blue-800 underline' : '', 'mb-4 ')}>
                      {subject?.title}
                    </Link>
                    <ul>
                      {subject?.courses?.map((course: { _id: string; title: string; slug: string }) => (
                        <li key={course?._id} className='text-blue-500 truncate hover:underline py-2 text-base'>
                          <Link href={`/${subject?.slug}/${course?.slug}`}>{course?.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default React.memo(Courses);
