import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const guidesDirectory = path.join(process.cwd(), 'guides')

export function getSortedGuidesData() {
  // Get file names under /guides
  const fileNames = fs.readdirSync(guidesDirectory)
  const allGuidesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(guidesDirectory, fileName)

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by order
  return allGuidesData.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllGuideIds() {
    const fileNames = fs.readdirSync(guidesDirectory)
  
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      };
    });
  }

  export async function getGuideData(id) {
    const fullPath = path.join(guidesDirectory, id + ".md")
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    }
  }