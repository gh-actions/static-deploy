workflow "New workflow" {
  on = "push"
  resolves = [
    "comfuture/ghpages"
  ]
}

action "only master" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  secrets = ["GITHUB_TOKEN"]
  args = "branch master"
}

action "Generate" {
  uses = "actions/npm@master"
  args = "generate"
  needs = ["only master"]
}

action "comfuture/ghpages" {
  uses = "comfuture/ghpages@38233d7"
  secrets = [
    "GITHUB_TOKEN",
    "GH_PAT",
  ]
  env = {
    BUILD_DIR = "dist/"
  }
  needs = ["Generate"]
}
