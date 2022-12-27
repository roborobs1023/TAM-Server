
export type Asset = {
  uuid: string,
  tag: string,
  hostname: string,
  model: string,
  ip: string,
  assignedUser: string,
  company_uuid?: string
}

let assets: Asset[] = [
  {
    uuid: '1',
    tag: 'CMS-0001',
    hostname: 'CMS-0001',
    model: 'Lenovo MP 46',
    ip: '10.0.0.2',
    assignedUser: 'rtucker',
    company_uuid: 'Comp1',
  },
  {
    uuid: '2',
    tag: 'CMS-0002',
    hostname: 'CMS-0002',
    model: 'Lenovo MP 44',
    ip: '10.0.0.5',
    assignedUser: 'acooper'
  }
]

export function getAssets() {
  return assets
}

export function getAsset(uuid: string) {
  return assets.find(asset => asset.uuid === uuid)
}

export function UpdateAsset(asset: Asset) {
  return
}

export function getAssetsByCompanyID(uuid: string) {
  return assets.filter(asset => asset.company_uuid === uuid)
}