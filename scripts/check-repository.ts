import { readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'

const root = join(import.meta.dir, '..')
const required = ['LICENSE','NOTICE','README.md','AGENTS.md','CHANGELOG.md','CONTRIBUTING.md','GOVERNANCE.md','SUPPORT.md','SECURITY.md','CODE_OF_CONDUCT.md','DCO.md','docs/PRD.md','docs/roadmap.md','docs/architecture/overview.md','docs/adr/0001-foundation-decisions.md','docs/security/threat-model.md','docs/releases/policy.md','docs/quality-scorecard.md','.github/pull_request_template.md','.github/workflows/ci.yml']
const errors: string[] = []
for (const file of required) if (!(await Bun.file(join(root, file)).exists())) errors.push(`Missing ${file}`)

async function walk(dir: string): Promise<string[]> {
  const out: string[] = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['.git','node_modules','build'].includes(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(path)); else out.push(path)
  }
  return out
}
const privateMarkers = [
  '.' + 'planning/',
  '.' + 'beads/',
  '/' + 'Users/jason/',
  'TxMQ' + ' Reference',
  'Workplace' + ' Insights',
]
for (const path of await walk(root)) {
  if (!/\.(md|json|ts|yml|yaml|txt)$/.test(path) && !path.endsWith('NOTICE')) continue
  const text = await Bun.file(path).text()
  for (const forbidden of privateMarkers) if (text.includes(forbidden)) errors.push(`${relative(root, path)} contains private marker ${forbidden}`)
}
const readme = await Bun.file(join(root, 'README.md')).text()
for (const phrase of ['foundation only','pull request','Semantic Versioning','Apache License 2.0']) if (!readme.toLowerCase().includes(phrase.toLowerCase())) errors.push(`README missing ${phrase}`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('Repository foundation check passed')
